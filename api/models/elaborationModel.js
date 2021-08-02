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
        required: true,
      },
      reference: {
        type: String,
        required: true,
      },
      spokenBy: {
        type: String,
        required: true,
      },
      submittedBy: {
        type: String,
        default: 'anonymous',
      },
      email: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);
