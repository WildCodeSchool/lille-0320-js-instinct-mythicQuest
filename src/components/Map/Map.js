import React from "react";
import "../Map/Map.scss";
import { sprite_size } from "../Constants/Constants";

const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "road";
    case 2:
      return "secret-tree";
    case 3:
      return "chest";
    case 4:
      return "poison-element";
    case 5:
      return "bridge";
    case 6:
      return "rock";
    case 7:
      return "fishing";
    case 8:
      return "plant";
    case 9:
      return "water";
    case 10:
      return "waterTL";
    case 11:
      return "waterTR";
    case 12:
      return "waterBR";
    case 13:
      return "waterBL";
    case 14:
      return "waterT";
    case 15:
      return "waterR";
    case 16:
      return "waterB";
    case 17:
      return "waterL";
    case 18:
      return "houseTL";
    case 19:
      return "houseTR";
    case 20:
      return "houseBR";
    case 21:
      return "houseBL";
    case 22:
      return "tree";
    case 23:
      return "souche1";
    case 24:
      return "souche2";
    case 25:
      return "river-houseTL";
    case 26:
      return "river-houseTR";
    case 27:
      return "river-houseBR";
    case 28:
      return "river-houseBL";
    case 29:
      return "stoneTL";
    case 30:
      return "stoneTR";
    case 31:
      return "stoneBR";
    case 32:
      return "stoneBL";
    case 33:
      return "mushroom";
    case 34:
      return "shipL";
    case 35:
      return "shipR";

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
      {props.tiles.map((tile, index) => (
        <MapTile tile={tile} key={index} />
      ))}
    </div>
  );
};

const Map = (props) => {
  return (
    <div className="map-area">
      {props.tiles.map((row, index) => (
        <MapRow tiles={row} key={index} />
      ))}
    </div>
  );
};

export default Map;
