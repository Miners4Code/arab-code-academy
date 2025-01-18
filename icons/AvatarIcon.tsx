import React from "react";
import { Icon } from "@chakra-ui/react";

export default function AvatarIcon() {
  return (
    <Icon fontSize={"45px"}>
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="40" cy="40.5481" rx="40" ry="39.4521" fill="white" />
        <path
          d="M40 0C17.9032 0 0 17.8717 0 39.9295C0 61.9874 17.9032 79.859 40 79.859C62.0968 79.859 80 61.9874 80 39.9295C80 17.8717 62.0968 0 40 0ZM40 15.4566C47.8387 15.4566 54.1935 21.8002 54.1935 29.6251C54.1935 37.45 47.8387 43.7937 40 43.7937C32.1613 43.7937 25.8064 37.45 25.8064 29.6251C25.8064 21.8002 32.1613 15.4566 40 15.4566ZM40 70.8427C30.5323 70.8427 22.0484 66.5599 16.371 59.8621C19.4032 54.1625 25.3387 50.2339 32.2581 50.2339C32.6452 50.2339 33.0323 50.2983 33.4032 50.411C35.5 51.0872 37.6935 51.522 40 51.522C42.3064 51.522 44.5161 51.0872 46.5968 50.411C46.9677 50.2983 47.3548 50.2339 47.7419 50.2339C54.6613 50.2339 60.5968 54.1625 63.629 59.8621C57.9516 66.5599 49.4677 70.8427 40 70.8427Z"
          fill="#FF6542"
        />
      </svg>
    </Icon>
  );
}
