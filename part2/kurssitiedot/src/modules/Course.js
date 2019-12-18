import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
};

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>;

const Content = ({ parts }) => (
    <>
        {parts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
    </>
);

const Course = ({course}) => {
    const total = course.parts.reduce((a, b) =>
        ({exercises: a.exercises + b.exercises}));

    return (
        <>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <b>Total of {total.exercises} exercises.</b>
        </>
    )
};

export default Course;