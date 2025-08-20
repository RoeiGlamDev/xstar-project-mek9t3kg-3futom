import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Glam Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src="/images/team1.jpg" alt="Team Member 1" className="team-image" />
          <h3 className="member-name">Alice Johnson</h3>
          <p className="member-role">Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="/images/team2.jpg" alt="Team Member 2" className="team-image" />
          <h3 className="member-name">Michael Smith</h3>
          <p className="member-role">Creative Director</p>
        </div>
        <div className="team-member">
          <img src="/images/team3.jpg" alt="Team Member 3" className="team-image" />
          <h3 className="member-name">Sophia Lee</h3>
          <p className="member-role">Marketing Specialist</p>
        </div>
        <div className="team-member">
          <img src="/images/team4.jpg" alt="Team Member 4" className="team-image" />
          <h3 className="member-name">David Brown</h3>
          <p className="member-role">Product Developer</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;