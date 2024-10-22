import React, { useState } from 'react';
import ModuleForm from '../components/ModuleForm'; // Import ModuleForm
import './MentorLearningPath.css';

const MentorLearningPath = () => {
    const [learningPath, setLearningPath] = useState({
        title: '',
        description: '',
        courses: []
    });

    const [courses, setCourses] = useState([
        { title: '', description: '', modules: [] } // Ensure modules is initialized as an empty array
    ]);

    // Handle learning path data changes
    const handleLearningPathChange = (field, value) => {
        setLearningPath({
            ...learningPath,
            [field]: value
        });
    };

    // Handle course data changes
    const handleCourseChange = (index, updatedCourse) => {
        const updatedCourses = courses.map((course, i) =>
            i === index ? updatedCourse : course
        );
        setCourses(updatedCourses);
    };

    // Handle module data changes
    const handleModuleChange = (courseIndex, moduleIndex, updatedModule) => {
        const updatedCourses = courses.map((course, i) => {
            if (i === courseIndex) {
                const updatedModules = course.modules.map((module, mIndex) =>
                    mIndex === moduleIndex ? updatedModule : module
                );
                return { ...course, modules: updatedModules };
            }
            return course;
        });
        setCourses(updatedCourses);
    };

    // Add a new course
    const handleAddCourse = () => {
        setCourses([...courses, { title: '', description: '', modules: [] }]); // Initialize modules as an empty array
    };

    // Remove a course
    const handleRemoveCourse = (courseIndex) => {
        const updatedCourses = courses.filter((_, i) => i !== courseIndex);
        setCourses(updatedCourses);
    };

    // Add a new module to a course
    const handleAddModule = (courseIndex) => {
        const updatedCourses = courses.map((course, i) =>
            i === courseIndex
                ? { ...course, modules: [...course.modules, { title: '', description: '', topics: [], quizzes: [] }] }
                : course
        );
        setCourses(updatedCourses);
    };

    // Remove a module
    const handleRemoveModule = (courseIndex, moduleIndex) => {
        const updatedCourses = courses.map((course, i) => {
            if (i === courseIndex) {
                const updatedModules = course.modules.filter((_, mIndex) => mIndex !== moduleIndex);
                return { ...course, modules: updatedModules };
            }
            return course;
        });
        setCourses(updatedCourses);
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            learningPath,
            courses
        };
        console.log('Submitted Learning Path Data:', formData);
        // You would replace this with the actual API call to create the learning path
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Learning Path Details */}
            <div>
                <h3>Create Learning Path</h3>
                <input
                    type="text"
                    value={learningPath.title}
                    onChange={(e) => handleLearningPathChange('title', e.target.value)}
                    placeholder="Learning Path Title"
                    required
                />
                <textarea
                    value={learningPath.description}
                    onChange={(e) => handleLearningPathChange('description', e.target.value)}
                    placeholder="Learning Path Description"
                    required
                />
            </div>

            {/* Courses Section */}
            {courses.map((course, courseIndex) => (
                <div key={courseIndex}>
                    <h4>Course {courseIndex + 1}</h4>
                    <input
                        type="text"
                        value={course.title}
                        onChange={(e) =>
                            handleCourseChange(courseIndex, {
                                ...course,
                                title: e.target.value
                            })
                        }
                        placeholder="Course Title"
                        required
                    />
                    <textarea
                        value={course.description}
                        onChange={(e) =>
                            handleCourseChange(courseIndex, {
                                ...course,
                                description: e.target.value
                            })
                        }
                        placeholder="Course Description"
                        required
                    />

                    {/* Modules Section */}
                    {course.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex}>
                            <ModuleForm
                                index={moduleIndex}
                                module={module}
                                onModuleChange={(updatedModule) =>
                                    handleModuleChange(courseIndex, moduleIndex, updatedModule)
                                }
                            />
                            <button type="button" onClick={() => handleRemoveModule(courseIndex, moduleIndex)}>
                                Remove Module
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={() => handleAddModule(courseIndex)}>
                        Add Module
                    </button>
                    <button type="button" onClick={() => handleRemoveCourse(courseIndex)}>
                        Remove Course
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddCourse}>
                Add Course
            </button>
            <button type="submit">Create Learning Path</button>
        </form>
    );
};

export default MentorLearningPath;
