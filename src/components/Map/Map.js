import React from "react";
import "../Map/Map.scss";
import { sprite_size } from "../Constants/Constants";

const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "rock";
    case 2:
      return "plant";
    case 3:
      return "tree";
    case 4:
      return "water";
    case 5:
      return "chest";
    case 6:
      return "road";
    case 7:
      return "mushroom-house";
    default:
      return "sorry";
  }
};

const MapTile = (props) => {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{ height: sprite_size, width: sprite_size }}
    />
  );
};

const MapRow = (props) => {
  return (
    <div className="row">
      {props.tiles.map((tile) => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
};

const Map = (props) => {
  return (
    <div className="map-area">
      {props.tiles.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
};

export default Map;
