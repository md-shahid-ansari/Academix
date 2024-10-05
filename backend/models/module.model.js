import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const moduleSchema = new mongoose.Schema({
    moduleId: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true  // Name of the module
    },
    description: {
        type: String,
        required: true  // Overview of the module’s content and learning objectives
    },
    contentURL: {
        type: String,  // Link to learning materials (e.g., videos, articles)
        required: true
    },
    skillsEarned: {
        type: [String],  // List of skills students will gain after completing the module
        default: []
    },
    status: {
        type: String,
        enum: ['not started', 'in progress', 'completed'],
        default: 'not started'  // Completion status
    },
    assessment: {
        type: String,  // Quizzes or exams associated with the module
        default: null
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// Apply the auto-increment plugin to the moduleSchema
moduleSchema.plugin(AutoIncrement, { inc_field: 'moduleId', start_seq: 1 });

export const Module = mongoose.model('Module', moduleSchema);
