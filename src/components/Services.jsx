import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore!"
      },
      {
        icon: <FaHiking />,
        title: "endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore!"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer  ",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore!"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
