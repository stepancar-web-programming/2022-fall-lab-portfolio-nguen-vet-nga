import React from 'react'
import '../styles/Skills.css'

function Skills () {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <ol className="list">
        <li className="item">
          <h2 className="light-yellow">Languages Programming:</h2>
          <p className="tab">C, C++, C#, Java, JavaScipt, Python</p>
        </li>
        <li className="item">
          <h2 className="light-yellow">Data:</h2>
          <p className="tab">Sql, Excel, PowerBI, Pandas</p>
        </li>
        <li className="item">
          <h2 className="light-yellow">Machine Learning:</h2>
          <p className="tab">Applied Mathematics, Algorithms, Data Modeling and Evaluation, Neural Networks, Natural Language Processing</p>
        </li>
      </ol>
    </div>
  )
}

export default Skills
