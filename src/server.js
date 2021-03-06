import 'regenerator-runtime/runtime';
import express from 'express';
import wixExpressCsrf from '@wix/wix-express-csrf';
import wixExpressRequireHttps from '@wix/wix-express-require-https';

module.exports = app => {
  app.use(wixExpressCsrf());
  app.use(wixExpressRequireHttps);

  app.use('/static', express.static('static'));

  app.get('/', (req, res) => {
    res.send('Use <a href="/users.json">/users.json</a>');
  });

  app.get('/users.json', (req, res) => {
    const toAbsolute = (...path) =>
      [`${req.protocol}://${req.headers.host}`, ...path]
        .map(p => p.replace(/(^\/|\/$)/g, ''))
        .filter(Boolean)
        .join('/');

    res.json({
      success: true,
      payload: [
        {
          id: 1,
          name: 'Leanne Graham',
          status: 'Online',
          match: '78',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          message:
            'I will go back to Gotham and I will fight men Iike this but I will not become an executioner.',
          image: toAbsolute('static/01.jpg'),
        },
        {
          id: 2,
          name: 'Clementine Bauch',
          match: '93',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Offline',
          message: "Someone like you. Someone who'll rattle the cages.",
          image: toAbsolute('static/02.jpg'),
        },
        {
          id: 3,
          name: 'Ervin Howell',
          match: '45',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Offline',
          message:
            'Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.',
          image: toAbsolute('static/03.jpg'),
        },
        {
          id: 4,
          name: 'John Lebsack',
          match: '88',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Online',
          message: "Bats frighten me. It's time my enemies shared my dread.",
          image: toAbsolute('static/04.jpg'),
        },
        {
          id: 5,
          name: 'James Dietrich',
          match: '76',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Offline',
          message:
            "It's not who I am underneath but what I do that defines me.",
          image: toAbsolute('static/05.jpg'),
        },
        {
          id: 6,
          name: 'Patricia Schulist',
          match: '95',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Online',
          message:
            'You have nothing, nothing to threaten me with. Nothing to do with all your strength.',
          image: toAbsolute('static/06.jpg'),
        },
        {
          id: 7,
          name: 'Chelsey Weissnat',
          match: '67',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Online',
          message:
            "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
          image: toAbsolute('static/07.jpg'),
        },
        {
          id: 8,
          name: 'Nicky Runol',
          match: '85',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          age: '27',
          location: 'Irvine, CA',
          info1: 'Straight, Single, 5"10',
          info2: 'Tea Totaller, Loves Photography & Travel',
          info3: 'Beaches, Mountain, Cafe, Movies',
          info4: 'Last seen: 23h ago',
          status: 'Online',
          message:
            "And as for the television's so-called plan, Batman has no jurisdiction.",
          image: toAbsolute('static/08.jpg'),
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          match: '74',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Online',
          message:
            'This is what happens when an unstoppable force meets an immovable object.',
          image: toAbsolute('static/09.jpg'),
        },
        {
          id: 10,
          name: 'Kurtis DuBuque',
          match: '98',
          description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
          status: 'Offline',
          message:
            'You want order in Gotham. Batman must take off his mask and turn himself in.',
          image: toAbsolute('static/10.jpg'),
        },
      ],
    });
  });

  return app;
};
