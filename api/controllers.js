import { Elaboration } from './models.js';

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
  }).catch((err) => console.log(err));
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
        error,
        message: 'Could not create elaboration',
      });
    });
}

export async function addMany(req, res) {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'No elaboration body',
    });
  }

  const addBody = new Promise((res, rej) => {
    body.map((elab) => {
      new Elaboration(elab).save();
    });

    res('It worked!'), rej('It didnt work!');
  });

  return addBody
    .then((message) =>
      res.status(201).json({
        success: true,
        message,
      })
    )
    .catch((error) =>
      res.status(400).json({
        success: false,
        error,
      })
    );
}

export async function update(req, res) {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  Elaboration.findOne({ _id: req.params.id }, (error, data) => {
    if (error) {
      return res.status(404).json({
        error,
        message: 'Elaboration not found',
      });
    }

    data.text = body.text;
    data.references = body.references;
    data.spokenBy = body.spokenBy;
    data
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: data._id,
          message: 'Updated!',
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: 'Not updated',
        });
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

    return res.status(200).json({
      success: true,
      data,
    });
  }).catch((err) => console.log(err));
}
