from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

class Spacecraft(BaseModel):
    name: str
    id: int

spacecrafts = [
    Spacecraft(name="DingDong", id=1),
    Spacecraft(name="Dingeling", id=2),
    Spacecraft(name="BingBong_13", id=3),
]

router = APIRouter()

@router.get("/api/spacecrafts", tags=["spacecrafts"], response_model=list[Spacecraft])
async def _():
    return spacecrafts

@router.get("/api/spacecrafts/{spacecraft_id}", tags=["spacecrafts"], response_model=Spacecraft)
async def _(spacecraft_id: int):
    for spacecraft in spacecrafts:
        if spacecraft.id == spacecraft_id:
            return spacecraft
    raise HTTPException(status_code=404, detail="Spacecraft not found")


@router.get("/api/spacecrafts", tags=["spacecrafts"], response_model=Spacecraft)
async def _(spacecraft: Spacecraft):
    for spacecraft in spacecrafts:
        if spacecraft.id == spacecraft_id:
            return spacecraft
    raise HTTPException(status_code=404, detail="Spacecraft not found")


