import { ApolloServer, gql } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';
import {v4 as uuidv4 } from 'uuid';

const pubsub = new PubSub();
const BOOK_ADDED = 'BOOK_ADDED';

// Your schema
const typeDefs = gql`
    type Book {
        id: ID!
        title: String
        releaseYear: Int
        authorId: ID!
        author: Author
    }

    type Author {
        id: ID!
        name: String
        books: [Book]
    }

    type ErrorMessage {
        message: String,
        errorCode: Int
    }

    type SuccessMessage {
        message: String
    }

    type Query {
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        createBook(authorId: ID!, title: String!, releaseYear: Int): Book
        updateBook(id: ID!, authorId: ID, title: String, releaseYear: Int): Book
        deleteBook(id: ID!): SuccessMessage
    }

    type Subscription {
        bookAdded: Book
    }
`;

// Sample data
let books = [];
let authors = [];

// Resolvers
const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id === args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author => author.id === args.id),
    },
    Mutation: {
        createBook: (parent, args) => {
            const newBook = { id: uuidv4(), ...args };
            books.push(newBook);
            pubsub.publish(BOOK_ADDED, { bookAdded: newBook });
            return newBook;
        },
        updateBook: (parent, args) => {
            const index = books.findIndex(book => book.id === args.id);
            if (index === -1) return null;
            const updatedBook = { ...books[index], ...args };
            books[index] = updatedBook;
            return updatedBook;
        },
        deleteBook: (parent, args) => {
            books = books.filter(book => book.id !== args.id);
            return { message: "Book deleted successfully" };
        }
    },
    Subscription: {
        bookAdded: {
            subscribe: () => pubsub.asyncIterator([BOOK_ADDED])
        }
    },
    Book: {
        author: (parent) => authors.find(author => author.id === parent.authorId)
    },
    Author: {
        books: (parent) => books.filter(book => book.authorId === parent.id)
    }
};

// Apollo Server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Start the server
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
