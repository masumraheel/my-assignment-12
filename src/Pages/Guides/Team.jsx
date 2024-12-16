import React, { useEffect, useState } from "react";
import TeamMembers from "./TeamMembers";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h2 className="my-heading text-center">Meet your local guides</h2>
      </div>
      <div className="w-auto grid grid-cols-1 md:grid-cols-3 gap-2">
          {team.map(( members) => (
            <TeamMembers key={ members._id}  members={ members}></TeamMembers>
          ))}
      </div>
    </div>
  );
};

export default Team;
