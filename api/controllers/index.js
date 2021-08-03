import { Elaboration } from '../models/index.js';

import { transporter } from '../utils/index.js';

export async function get(req, res) {
  await Elaboration.find({ for: req.params.for }, (error, data) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error,
      });
    }

    if (!data.length) {
      return res.status(404).json({
        success: false,
        error: `No results found`,
      });
    }

    return res.status(200).json(data);
  }).catch((err) => console.error(err));
}

export async function add(req, res) {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'No elaboration body',
    });
  }

  const elaboration = new Elaboration(body);

  if (!elaboration) {
    return res.status(400).json({
      success: false,
      error,
    });
  }

  elaboration
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: elaboration._id,
        message: 'Elaboration created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error,
        message: 'Could not create elaboration',
      });
    });
}

export async function remove(req, res) {
  await Elaboration.findOneAndDelete({ _id: req.params.id }, (error, data) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error,
      });
    }

    if (res.status === 404) {
      return res.status(404).json({
        success: false,
        error,
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  }).catch((err) => console.error(err));
}

export async function contact(req, res) {
  const { message, email } = req.body;

  const output = `
    <p>${message}</p>
    <p>from ${email ? email : '<i>anonymous</i>'}</p>
    `;

  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'New contact from 4NT 🥳',
      html: output,
    });

    res.status(200).json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

export async function flag(req, res) {
  try {
    const update = await Elaboration.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $inc: { flagCount: 1 },
        flaggedLast: new Date(),
      },
      { new: true }
    );

    const email = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'New flag/report from 4NT 😵',
      html: JSON.stringify(update, null, 2),
    });

    res.status(200).json({
      success: true,
      message: 'Succesfully flagged',
      emailMessageId: email.messageId,
      flagCount: update.flagCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
