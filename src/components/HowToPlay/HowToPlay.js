import React from "react";
import "./HowToPlay.scss";

const HowToPlay = () => {
  return (
    <section className="tutorial" id="howtoplay">
      <h2>How to play ?</h2>
      <div className="tutorial-container">
        <div className="left-section">
          <iframe
            title="Tutorial video to learn how to play"
            width="500"
            height="350"
            src="../video/MythicQuest.mp4"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="right-section">
          <div>
            <h3>
              <span>1</span> Use the arrows keys to move your character.
            </h3>
            <img src="images/arrow-keys.png" alt="arrow-keys"></img>
          </div>
          <div>
            <h3>
              <span>2</span> Collect all the coins to buy stuff.
            </h3>
            <p>
              Explore the map to find all the gold coins, they can be everywhere
              and some coins are more powerful than the others, obviously they
              are well hidden. Collect as much as possible to be able to buy
              your stuff.
            </p>
          </div>
          <div>
            <h3>
              <span>3</span> Use your stuff to kill monsters.
            </h3>
            <p>
              Buying more powerful stuff will allow you to kill all the monsters
              on the map and thus be able to win and exit the level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
