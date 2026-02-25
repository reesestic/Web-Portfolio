import { useState } from "react";
import "../App.css";
import "../Coursework.css";
import type {Course} from "../../types/Course.ts";

const buCourses = [
    {
        code: "CS411",
        name: "Software Engineering",
        desc: [
            { bold: "Purpose: Master Requirements Engineering and Software Design Principles." },
            { text: "Emphasis on ", bold: "creating a web application, Use Case Diagrams, RE work, and GRASP patterns." },
            { bold: "Taught communication techniques", text2: " like Agile/Scrum sprint methodologies." },
        ],
        skills: ["Requirements Engineering", "Product Management", "Scrum Sprint Leading"],
    },
    {
        code: "CS391",
        name: "Web Development",
        desc: [
            { bold: "Purpose: Learn industry standards of HTML/CSS/JS, React, and other frontend frameworks." },
            { text: "Emphasis on ", bold: "SEO optimization, responsive web design, and React libraries." },
            { bold: "Complex topics", text2: " like Component reusability, routing, useState and other hooks." },
        ],
        skills: ["React", "Responsive Web Design", "Media Queries", "HTML/CSS/JS"],
    },
    {
        code: "CS475",
        name: "Spark Technology Fellowship",
        desc: [
            { bold: "Purpose: Create user-focused web application in a cross-functional team." },
            { text: "Emphasis on ", bold: "Agile/Scrum methodology, Weekly Development Sprints, User Stories." },
            { bold: "Complex topics", text2: " like value proposition presentations, tech stack integration, CI/CD." },
        ],
        skills: ["CI/CD", "Supabase", "FastAPI", "Cross-functional Development"],
    },
    {
        code: "CS460",
        name: "Database Systems",
        desc: [
            { bold: "Purpose: Design and understand database systems." },
            { text: "Covers ", bold: "ER diagrams, relational math, SQL, and distributed databases." },
            { bold: "Learned database essentials:", text2: " indexing, querying , transactions, and concurrency." },
        ],
        skills: ["SQL", "Database Theory", "Concurrency Control"],
    },
    {
        code: "CS330",
        name: "Analysis of Algorithms",
        desc: [
            { bold: "Purpose: Understand algorithm efficiency and limitations." },
            { text: "Emphasis on ", bold: "greedy algorithms, graph traversal, dynamic programming, and network flows." },
            { bold: "Complex topics", text2: " like NP-completeness, 2D Dynamic Programming, and approximation algorithms." },
        ],
        skills: ["Optimal Algorithm Design", "Dynamic Programming", "NP-Completeness"],
    },
    {
        code: "CS112",
        name: "Data Structures & Algorithms",
        desc: [
            { bold: "Purpose: Learn Data structures and algorithms in Java." },
            { text: "Emphasis on ", bold: "linked lists, sorting algorithms, hash tables, stacks/queues and recursion." },
            { text: "Algorithm time/space complexity analysis", bold: " using Big O notation." },
        ],
        skills: ["Data Structures", "Algorithms", "Big-O Notation"],
    },
    {
        code: "CS131",
        name: "Combinatoric Structures",
        desc: [
            { bold: "Purpose: Create combinatoric logic models." },
            { text: "Rigorous use of various proof types: ", bold: "Inductive, Recursive, Direct, and more." },
            { text: "Emphasis on ", bold: "logic, set theory and boolean algebra", text2: " to represent abstract problems." },
        ],
        skills: ["Proofs", "Logic & Counting", "Discrete Math Applications"],
    },
    {
        code: "CS210",
        name: "Computer Systems",
        desc: [
            { bold: "Purpose: Learn C, Assembly and Computer Hardware." },
            { text: "Complex understanding of ", bold: "computer hardware's", text2: " communication with software and memory." },
            { text: "Heavy usage of ", bold: "bitwise operations, C libraries and assembly instructions." },
        ],
        skills: ["Assembly", "CPU and Memory", "Stack Tracing"],
    },
    {
        code: "CS237",
        name: "Probability in Computing",
        desc: [
            { bold: "Purpose: Use Combinatoric Structures in Programming." },
            { text: "Emphasis on ", bold: "statistics, combinatorics, distributions, expectation and variance." },
            { bold: "Complex distribution applications", text2: " usage to master statistics in Python." },
        ],
        skills: ["Distribution Applications", "Counting & Probability", "Statistics & Data Analysis"],
    },
];

const clemsonCourses = [
    {
        code: "CPSC 1010",
        name: "Computer Science 1",
        desc: [
            { bold: "Purpose: Learn computing fundamentals in C." },
            { text: "Covers ", bold: "data types and functions, recursion, C memory model, and structs." },
            { bold: "Teaches the basics of computer memory", text2: " and basic programming using C language and libraries." },
        ],
        skills: ["Programming in C", "Programming Fundamentals", "Functions & Recursion"],
    },
    {
        code: "CPSC 1020",
        name: "Computer Science 2",
        desc: [
            { bold: "Purpose: Master coding in C/C++." },
            { text: "Covers ", bold: "C/C++ differences, data structures, debugging, and team-oriented projects." },
            { bold: "Built 4 projects over the semester", text2: " to master modular programming and debugging." },
        ],
        skills: ["C++ Programming", "Team Coding Projects", "Modular Programming / Debugging"],
    },
    {
        code: "MATH 3110",
        name: "Linear Algebra",
        desc: [
            { bold: "Purpose: Master basics of linear algebra." },
            { text: "Covers ", bold: "matrix reduction, calculus, vector spaces, and eigenvalues and eigenspaces." },
            { bold: "Strong emphasis on matrix algebra", text2: " proofs, polynomials, and linear transformations." },
        ],
        skills: ["Matrix Algebra", "Linear Transformations", "Vectors / Eigenspaces"],
    },
    {
        code: "ECE 1990",
        name: "Robot Networks",
        desc: [
            { bold: "Purpose: Study/Improve image classification LLM." },
            { text: "Covers ", bold: "Pytorch, SGD, debugging, and editing step values for accuracy." },
            { bold: "Analyzed how LLMs learn and improve", text2: " to better understand AI and machine learning." },
        ],
        skills: ["Pytorch", "LLMs", "AI / ML"],
    },
];

function CourseCard({ course, logo, alt } : {course : Course; logo: string; alt: string;}) {
    return (
        <div className="course-card">

            {/* Top row: code + logo side by side */}
            <div className="card-top-row">
                <h3>{course.code}</h3>
                <img src={logo} alt={alt} className="school-logo" />
            </div>

            {/* Full width title below */}
            <h2>{course.name}</h2>

            <ul className="course-desc">
                {course.desc.map((item, i) => (
                    <li key={i}>
                        {item.text && <span>{item.text}</span>}
                        {item.bold && <strong>{item.bold}</strong>}
                        {item.text2 && <span>{item.text2}</span>}
                    </li>
                ))}
            </ul>

            <h4>Skills:</h4>
            <ul className="skills-list">
                {course.skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>

        </div>
    );
}

export default function Coursework() {
    const [isClemson, setIsClemson] = useState(false);

    const courses = isClemson ? clemsonCourses : buCourses;
    const logo = isClemson ? "/clemson-logo.png" : "/bu-logo.png";
    const alt = isClemson ? "Clemson Logo" : "BU Logo";
    const schoolName = isClemson ? "Clemson University" : "Boston University";
    const count = courses.length;

    return (
        <div className={isClemson ? "theme-clemson coursework-page" : "theme-bu coursework-page"}>
            <div className="theme-toggle-bar">
                <span id="theme-view-coursework-text">
                    {isClemson ? "View BU Coursework:" : "View Clemson Coursework (Freshman Year):"}
                </span>
                <button id="theme-button" onClick={() => setIsClemson(!isClemson)}>
                    <img
                        src={isClemson ? "/bu-logo.png" : "/clemson-logo.png"}
                        alt={isClemson ? "BU Logo" : "Clemson Logo"}
                        className="clemson-button"
                    />
                </button>
            </div>

            <h1 className="theme-school-text">
                Courses taken at {schoolName} ({count})
            </h1>

            <section className="cards-grid">
                {courses.map((course) => (
                    <CourseCard key={course.code} course={course} logo={logo} alt={alt} />
                ))}
            </section>
        </div>
    );
}