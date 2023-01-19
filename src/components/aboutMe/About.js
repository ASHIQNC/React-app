import "./About.css";

import React from "react";

function About() {
  return (
    <div className="about_cmp">
      {/* <h1 className="about_me">About me</h1> */}
      <div className="about-header">
        <h3 className="about-header__name">Ashiq Rahman</h3>
      </div>
      <div className="address">
        <h3 style={{ marginBottom: "3px", fontSize: "20px" }}>Address:</h3>
        <p>Nediyachali(house)</p>
        <p>Payyoli(po)</p>
        <p>Kozhikode(dist)</p>
        <p>kerala</p>
      </div>
      <div className="education">
        <h3>Education:</h3>
        <div className="div_table">
          <table>
            <tr>
              <th>Year</th>
              <th>Degree</th>
              <th>Institute/Board</th>
              <th>CGPA / %</th>
            </tr>
            <tr>
              <td>2018</td>
              <td>B.Tech</td>
              <td>MESCE</td>
              <td>6.48</td>
            </tr>
            <tr>
              <td>2014</td>
              <td>Higher Secondary</td>
              <td>GVHSS payyoli</td>
              <td>79</td>
            </tr>
            <tr>
              <td>2012</td>
              <td>Secondary</td>
              <td>GVHSS</td>
              <td>80</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="projects">
        <h3>
          <b>Projects:</b>
        </h3>
        <ul>
          <li>
            <b>Mentor Dashboard</b>
            <ul>
              <li>
                Developed a Web Portal for mentors for checking student
                performance, which area student is struggling and all other
                details with graphical representation. Done Frontend development
                using Reactjs js.
              </li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            <b>Onboarding Module</b>
            <ul>
              <li>
                Developed a responsive web portal which is hosted in a mobile
                app as well as web portal.This project will help the student or
                parent to identify were their purchased products are, did
                shipping happened, their payment details all this will be
                visible in the app as well as web portal for 15 days from their
                date of joining
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="technical_skills">
        <h3>Technical skills:</h3>
        <ul>
          <li>
            <b>Web technologies :</b>HTML, CSS, JavaScript, Reactjs, Github,
            Bootstrap
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
