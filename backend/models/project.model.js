import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const projectSchema = new mongoose.Schema({
    projectId: {
        type: Number,
        unique: true
    },
    projectTitle: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    assignedStudents: {
        type: [Number],  // List of student IDs assigned to the project
        default: []
    },
    assignedMentor: {
        type: Number,  // Mentor ID linked to the project
        required: true
    },
    githubRepoURL: {
        type: String,
        required: true  // URL for the project's GitHub repository
    },
    status: {
        type: String,
        enum: ['in progress', 'completed'],
        default: 'in progress'
    },
    taskList: {
        type: [{  // List of tasks with their status
            taskTitle: String,
            status: {
                type: String,
                enum: ['not started', 'in progress', 'completed'],
                default: 'not started'
            }
        }],
        default: []
    },
    teamCommunication: {
        type: String,
        default: null  // Real-time chat or discussion board link
    },
    mentorSupport: {
        type: String,
        default: null  // Functionality for students to request mentor guidance
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// Apply the auto-increment plugin to the projectSchema
projectSchema.plugin(AutoIncrement, { inc_field: 'projectId', start_seq: 1 });

export const Project = mongoose.model('Project', projectSchema);
