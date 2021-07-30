import mongoose from 'mongoose';

export const Elaboration = mongoose.model(
  'elaboration',
  new mongoose.Schema(
    {
      for: {
        type: String,
        required: true,
      },
      text: {
        type: String,
      },
      reference: {
        type: String,
        required: true,
      },
      spokenBy: {
        type: String,
        default: 'The Buddha',
      },
      submittedBy: {
        type: String,
        default: 'anonymous',
      },
    },
    { timestamps: true }
  )
);
