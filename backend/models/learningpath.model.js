import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const learningPathSchema = new mongoose.Schema({
    learningPathId: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true  // Name of the learning path
    },
    description: {
        type: String,
        required: true  // Overview of the learning path
    },
    modules: {
        type: [String],  // List of associated learning module IDs
        default: []
    },
    progress: {
        type: Number,
        default: 0,  // Percentage progress in the learning path
        min: 0,
        max: 100
    },
    assignedTo: {
        type: Number,  // Student ID to whom this path is assigned
        required: true
    },
    recommendedCertifications: {
        type: [String],  // List of certifications the student can earn through the path
        default: []
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// Apply the auto-increment plugin to the learningPathSchema
learningPathSchema.plugin(AutoIncrement, { inc_field: 'learningPathId', start_seq: 1 });

export const LearningPath = mongoose.model('LearningPath', learningPathSchema);
