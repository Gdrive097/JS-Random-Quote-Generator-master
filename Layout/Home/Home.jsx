import React, { Component, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
// Components
import Student from "../../components/Student/Student";
import SearchStudents from "../../components/SearchStudent/SearchStudents";

const Home = () => {
  const [data, setData] = useState("");
  const [allstudents, setAllstudents] = useState();
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const students = await axios.get("/api/students/");
      setData(students.data.students);
      console.log("Dataaa", students.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeStudent = async (id) => {
    try {
      const studentRemoved = await axios.delete(`/api/students/${id}`);
      const students = await axios("/api/students/");
      setData(students.data.students);
      console.log("Dataaa", students.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const searchStudents = async (username) => {
    let allStudents = [...data];
    if (allStudents === null) setAllstudents(allStudents);

    let students = data.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (students.length > 0) setData(students);

    if (username.trim() === "") setData(allStudents);
    console.log("searched st", allStudents, students);
  };

  useEffect(() => {
    getData();
  }, []);

  // let students;

  // if (data)
  //   students =
  //     data.students &&
  //     data.students.map(student => (
  //       <Student key={student._id} {...student} removeStudent={removeStudent} />
  //     ));
  // // else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

  // if (error) return <h1>{error}</h1>;
  // if (data !== null)
  //   if (!data.students.length)
  //     return <h1 className="No-Students">No students!</h1>;

  return (
    <div className="Table-Wrapper">
      <h1>Student Management Portal</h1>
      <SearchStudents searchStudents={searchStudents} />
      <table className="Table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Enrollment Number</th>
            <th>Actions</th>
          </tr>
          {/* <tbody>{students}</tbody> */}
          <tr>
            {data ? (
              data &&
              data.map((student, index) => (
                <Student
                  key={student._id}
                  {...student}
                  removeStudent={removeStudent}
                />
              ))
            ) : (
              <td>
                <div className="Spinner-Wrapper">
                  {" "}
                  <PropagateLoader color={"#333"} />{" "}
                </div>
              </td>
            )}
          </tr>

          {data.length === 0 && (
            <tr>
              <td>
                <h1 className="No-Students">No students!</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
