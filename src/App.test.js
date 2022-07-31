import axios from "axios";


const dummyData = [
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023056686?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Denmark",
          "city": "København Sv",
          "latitude": "55.64871",
          "name": "Øresundsparken",
          "location": "København SV, Denmark",
          "region": "",
          "longitude": "12.53102"
      },
      "starts_at": "2022-08-03T18:00:00",
      "artist": {
          "thumb_url": "https://photos.bandsintown.com/thumb/7365766.jpeg",
          "mbid": "b8a7c51f-362c-4dcb-a259-bc6e0095f0a6",
          "facebook_page_url": "http://www.facebook.com/9189674485",
          "image_url": "https://photos.bandsintown.com/large/7365766.jpeg",
          "tracker_count": 5909186,
          "tracking": [],
          "upcoming_event_count": 22,
          "url": "https://www.bandsintown.com/a/190899?came_from=267&app_id=abc",
          "support_url": "",
          "name": "Ed Sheeran",
          "options": {
              "display_listen_unit": false
          },
          "links": [
              {
                  "type": "website",
                  "url": "https://atlanti.cr/dlx-album"
              },
              {
                  "type": "facebook",
                  "url": "https://www.facebook.com/EdSheeranMusic/"
              }
          ],
          "artist_optin_show_phone_number": false,
          "id": "190899"
      },
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023056686?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-03T18:00:00",
      "on_sale_datetime": "2021-09-25T13:00:00",
      "id": "1023056686",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1022974376?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Denmark",
          "city": "København Sv",
          "latitude": "55.64871",
          "name": "Øresundsparken",
          "location": "København SV, Denmark",
          "region": "",
          "longitude": "12.53102"
      },
      "starts_at": "2022-08-04T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1022974376?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-04T18:00:00",
      "on_sale_datetime": "2021-09-25T12:00:00",
      "id": "1022974376",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023056498?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Denmark",
          "city": "København Sv",
          "latitude": "55.64871",
          "name": "Øresundsparken",
          "location": "København SV, Denmark",
          "region": "",
          "longitude": "12.53102"
      },
      "starts_at": "2022-08-05T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023056498?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-05T18:00:00",
      "on_sale_datetime": "2021-09-25T12:45:00",
      "id": "1023056498",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023056205?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Denmark",
          "city": "København Sv",
          "latitude": "55.64871",
          "name": "Øresundsparken",
          "location": "København SV, Denmark",
          "region": "",
          "longitude": "12.53102"
      },
      "starts_at": "2022-08-06T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023056205?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-06T18:00:00",
      "on_sale_datetime": "2021-09-25T13:42:00",
      "id": "1023056205",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1022985765?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Sweden",
          "city": "Göteborg",
          "latitude": "57.70590059999999",
          "name": "Ullevi",
          "location": "Göteborg, Sweden",
          "region": "",
          "longitude": "11.9873108"
      },
      "starts_at": "2022-08-10T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1022985765?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-10T19:00:00",
      "on_sale_datetime": "2021-09-25T12:00:00",
      "id": "1022985765",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023056162?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Sweden",
          "city": "Göteborg",
          "latitude": "57.70590059999999",
          "name": "Ullevi",
          "location": "Göteborg, Sweden",
          "region": "",
          "longitude": "11.9873108"
      },
      "starts_at": "2022-08-11T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023056162?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-11T19:00:00",
      "on_sale_datetime": "2021-09-25T13:41:00",
      "id": "1023056162",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1022976188?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Finland",
          "city": "Helsinki",
          "latitude": "60.18790199999999",
          "name": "Helsinki Olympic Stadium",
          "location": "Helsinki, Finland",
          "region": "",
          "longitude": "24.9267459"
      },
      "starts_at": "2022-08-20T16:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1022976188?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-20T16:00:00",
      "on_sale_datetime": "",
      "id": "1022976188",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023069109?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Poland",
          "city": "Warsaw",
          "latitude": "52.2394957",
          "name": "PGE Narodowy",
          "location": "Warsaw, Poland",
          "region": "",
          "longitude": "21.04579089999993"
      },
      "starts_at": "2022-08-25T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023069109?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-25T18:00:00",
      "on_sale_datetime": "",
      "id": "1023069109",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023069403?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Poland",
          "city": "Warsaw",
          "latitude": "52.2394957",
          "name": "PGE Narodowy",
          "location": "Warsaw, Poland",
          "region": "",
          "longitude": "21.04579089999993"
      },
      "starts_at": "2022-08-26T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023069403?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-08-26T18:00:00",
      "on_sale_datetime": "",
      "id": "1023069403",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1022976513?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Germany",
          "city": "München",
          "latitude": "48.1731317",
          "name": "Olympiastadion München",
          "location": "Munich, Germany",
          "region": "",
          "longitude": "11.5465876"
      },
      "starts_at": "2022-09-10T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1022976513?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-10T19:00:00",
      "on_sale_datetime": "",
      "id": "1022976513",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023055701?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Germany",
          "city": "München",
          "latitude": "48.1731317",
          "name": "Olympiastadion München",
          "location": "Munich, Germany",
          "region": "",
          "longitude": "11.5465876"
      },
      "starts_at": "2022-09-11T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023055701?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-11T18:00:00",
      "on_sale_datetime": "",
      "id": "1023055701",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023141869?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Germany",
          "city": "München",
          "latitude": "48.1731317",
          "name": "Olympiastadion München",
          "location": "Munich, Germany",
          "region": "",
          "longitude": "11.5465876"
      },
      "starts_at": "2022-09-12T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023141869?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-12T18:00:00",
      "on_sale_datetime": "",
      "id": "1023141869",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1022988467?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Switzerland",
          "city": "Zürich",
          "latitude": "47.38266639999999",
          "name": "Stadion Letzigrund",
          "location": "Zürich, Switzerland",
          "region": "",
          "longitude": "8.50380759999996"
      },
      "starts_at": "2022-09-16T18:30:00",
      "festival_datetime_display_rule": "",
      "description": "<b>Ed Sheeran gibt am Samstag, 17.9.22 wegen grosser Nachfrage ein Zusatzkonzert im Stadion Letzigrund Zürich!</b><br>Nach zwei restlos ausverkauften und begeisternden Konzerten im heissen Sommer 2018 kehrt Ed Sheeran in die Schweiz zurück: Am Freitag und Samstag, 16./17. September 2022, spielt Englands Superstar seine einzigen zwei Konzerte in der Schweiz im Stadion Letzigrund Zürich als Teil seiner «+ - = ÷ x Tour» (sprich: «The Mathematics Tour»), die im April 2022 in Irland beginnt und neben vielen Hauptstädten Europas auch drei Shows im legendären Wembley-Stadion umfasst. Nach seiner «Divide»-Tour von 2017-2019, die als erfolgreichste überhaupt in die Konzertgeschichte einging, wird Sheeran erstmals die Songs seines neuen Albums «=» live präsentieren, das mit der vorab veröffentlichten Single «Bad Habits» fulminant startete. Aber natürlich spielt der derzeit erfolgreichste Solokünstler auch seine grössten Hits von «Thinking Out Loud», über «The A Team» bis hin zu «Shape Of You». Und dies auf einer spektakulären Bühne exakt in der Mitte des Stadions. Als «Main Support Act» wird das britische Supertalent GRIFF bei beiden Konzerten zu Gast sein.<br><br>Für die Konzerte sind ausschliesslich digitale Tickets erhältlich, nur online und exklusiv bei ticketcorner.ch.",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1022988467?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-16T18:30:00",
      "on_sale_datetime": "2021-09-25T11:00:00",
      "id": "1022988467",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023056347?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Switzerland",
          "city": "Zürich",
          "latitude": "47.38266639999999",
          "name": "Stadion Letzigrund",
          "location": "Zürich, Switzerland",
          "region": "",
          "longitude": "8.50380759999996"
      },
      "starts_at": "2022-09-17T17:30:00",
      "festival_datetime_display_rule": "",
      "description": "<b>Ed Sheeran gibt am Samstag, 17.9.22 wegen grosser Nachfrage ein Zusatzkonzert im Stadion Letzigrund Zürich!</b><br>Nach zwei restlos ausverkauften und begeisternden Konzerten im heissen Sommer 2018 kehrt Ed Sheeran in die Schweiz zurück: Am Freitag und Samstag, 16./17. September 2022, spielt Englands Superstar seine einzigen zwei Konzerte in der Schweiz im Stadion Letzigrund Zürich als Teil seiner «+ - = ÷ x Tour» (sprich: «The Mathematics Tour»), die im April 2022 in Irland beginnt und neben vielen Hauptstädten Europas auch drei Shows im legendären Wembley-Stadion umfasst. Nach seiner «Divide»-Tour von 2017-2019, die als erfolgreichste überhaupt in die Konzertgeschichte einging, wird Sheeran erstmals die Songs seines neuen Albums «=» live präsentieren, das mit der vorab veröffentlichten Single «Bad Habits» fulminant startete. Aber natürlich spielt der derzeit erfolgreichste Solokünstler auch seine grössten Hits von «Thinking Out Loud», über «The A Team» bis hin zu «Shape Of You». Und dies auf einer spektakulären Bühne exakt in der Mitte des Stadions. Als «Main Support Act» wird das britische Supertalent GRIFF bei beiden Konzerten zu Gast sein.<br><br>Für die Konzerte sind ausschliesslich digitale Tickets erhältlich, nur online und exklusiv bei ticketcorner.ch.",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023056347?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-17T17:30:00",
      "on_sale_datetime": "2021-09-25T12:41:00",
      "id": "1023056347",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1022975136?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Germany",
          "city": "Frankfurt Am Main",
          "latitude": "50.0685807",
          "name": "Deutsche Bank Park",
          "location": "Frankfurt am Main, Germany",
          "region": "",
          "longitude": "8.645472"
      },
      "starts_at": "2022-09-23T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1022975136?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-23T19:00:00",
      "on_sale_datetime": "",
      "id": "1022975136",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023055583?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Germany",
          "city": "Frankfurt Am Main",
          "latitude": "50.0685807",
          "name": "Deutsche Bank Park",
          "location": "Frankfurt am Main, Germany",
          "region": "",
          "longitude": "8.645472"
      },
      "starts_at": "2022-09-24T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023055583?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-24T18:00:00",
      "on_sale_datetime": "",
      "id": "1023055583",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1023058979?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Germany",
          "city": "Frankfurt Am Main",
          "latitude": "50.0685807",
          "name": "Deutsche Bank Park",
          "location": "Frankfurt am Main, Germany",
          "region": "",
          "longitude": "8.645472"
      },
      "starts_at": "2022-09-25T18:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1023058979?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2022-09-25T18:00:00",
      "on_sale_datetime": "",
      "id": "1023058979",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/103542127?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "New Zealand",
          "city": "Wellington",
          "latitude": "-41.27292180000001",
          "name": "Westpac Stadium",
          "location": "Wellington, New Zealand",
          "region": "",
          "longitude": "174.7859154"
      },
      "starts_at": "2023-02-01T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/103542127?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2023-02-01T19:00:00",
      "on_sale_datetime": "",
      "id": "103542127",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1024563276?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "New Zealand",
          "city": "Auckland",
          "latitude": "-36.8749538",
          "name": "Eden Park",
          "location": "Auckland, New Zealand",
          "region": "",
          "longitude": "174.74475619999998"
      },
      "starts_at": "2023-02-10T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "Your ticket(s) for this event will be digital tickets that will be delivered in the lead up to the show via the Ticketmaster app, which you will need to download to your smart device. When you purchase tickets for this event, you will be prompted to enter and verify your mobile phone number. This is important as you will need this number to verify your identity when tickets are delivered via the Ticketmaster app nearer to the event date. You will also need to provide ID when you attend the show matching the lead booker name that will appear on your ticket. See full Ts and Cs for info.",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1024563276?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2023-02-10T19:00:00",
      "on_sale_datetime": "2022-03-23T11:00:00",
      "id": "1024563276",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/103542135?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "New Zealand",
          "city": "Auckland",
          "latitude": "-36.8749538",
          "name": "Eden Park",
          "location": "Auckland, New Zealand",
          "region": "",
          "longitude": "174.74475619999998"
      },
      "starts_at": "2023-02-11T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/103542135?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2023-02-11T19:00:00",
      "on_sale_datetime": "",
      "id": "103542135",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/103542176?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Australia",
          "city": "Milton",
          "latitude": "-27.464845",
          "name": "Suncorp Stadium",
          "location": "Milton, Australia",
          "region": "",
          "longitude": "153.00953119999997"
      },
      "starts_at": "2023-02-19T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/103542176?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2023-02-19T19:00:00",
      "on_sale_datetime": "",
      "id": "103542176",
      "ends_at": "",
      "festival_end_date": ""
  },
  {
      "offers": [
          {
              "type": "Tickets",
              "url": "https://www.bandsintown.com/t/1024563390?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
              "status": "available"
          }
      ],
      "venue": {
          "country": "Australia",
          "city": "Burswood",
          "latitude": "-31.9511708",
          "name": "Optus Stadium",
          "location": "Burswood, Australia",
          "region": "",
          "longitude": "115.8890146"
      },
      "starts_at": "2023-03-12T19:00:00",
      "festival_datetime_display_rule": "",
      "description": "Your ticket(s) for this event will be digital tickets that will be delivered in the lead up to the show via the Ticketmaster app, which you will need to download to your smart device. When you purchase tickets for this event, you will be prompted to enter and verify your mobile phone number. This is important as you will need this number to verify your identity when tickets are delivered via the Ticketmaster app nearer to the event date. You will also need to provide ID when you attend the show matching the lead booker name that will appear on your ticket. See full Ts and Cs for info. .",
      "lineup": [
          "Ed Sheeran"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "",
      "artist_id": "190899",
      "url": "https://www.bandsintown.com/e/1024563390?app_id=abc&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime_display_rule": "datetime",
      "datetime": "2023-03-12T19:00:00",
      "on_sale_datetime": "2022-03-23T14:00:00",
      "id": "1024563390",
      "ends_at": "",
      "festival_end_date": ""
  }
];

test("checking ed sheeran events", async () => {
  const config = {
    method: 'get',
    url: `https://rest.bandsintown.com/artists/ed sheeran/events?app_id=abc`,
    headers: {
      Accept: 'application/json',
    },
    timeout: 5000,
  }

  axios(config)
    .then(function (response) {
      if (response.status === 200) {
        expect(response.data).toEqual(dummyData);
      }
    })
    .catch(function (error) {
      console.log(error)
    })


});
