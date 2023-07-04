# React Weather Dashboard
[![Project Version][version-image]][version-url]
[![Frontend][Frontend-image]][Frontend-url]


---
## About Project 

The Weather Dashboard is a React.js application that provides users with real-time weather information and forecasts for various locations. It utilizes the "Weather" API to fetch data such as temperature, local time/location, UV Index, humidity, and a regional forecast for the next few days. By integrating the Unsplash API, the dashboard also displays captivating images related to the searched city, creating an immersive visual experience.

Built with React.js and Tailwind.css, the Weather Dashboard combines the power of a modern JavaScript framework with a highly customizable and responsive CSS utility library. The use of React.js allows for efficient component-based development, while Tailwind.css simplifies styling and layout design. Whether you're a weather enthusiast or simply want to stay informed about current weather conditions, this dashboard provides an intuitive and visually appealing interface for accessing accurate and up-to-date weather data.

[![Netlify Status](https://api.netlify.com/api/v1/badges/461258df-d2ec-473d-b620-0f18d3b85cfe/deploy-status)](https://app.netlify.com/sites/weather-dashboard-with-react/deploys)
### Deployed Site: https://weather-dashboard-with-react.netlify.app/ 

---

# Showcase

### Final Product 

![Weather Report](https://github.com/Noah8863/React-Weather-App/assets/60634270/72252be2-aa37-4751-8ecb-3ac167cb6294)


![react-weather-app-sc](https://github.com/Noah8863/React-Weather-App/assets/60634270/3e8a3f64-e9a6-4565-93f9-ffae2ed682c9)

### Orginal Wireframe 

![originalWireFrame](https://github.com/Noah8863/React-Weather-App/assets/60634270/f7d13712-8c44-4795-b2fe-39b7cb71b44e)


* The initial concept for this project aimed to dynamically adjust the background color based on the current temperature and present a comprehensive 5-day weather forecast for the searched city. However, due to some challenges with the API, the availability of a proper 5-day forecast was limited to only 3 days. In order to adapt to this problem, necessary modifications were implemented. Alternative weather APIs were explored, but they either had a limited number of free requests before requiring a subscription or did not provide the desired dataset.

* During the development process, the idea of changing the background color was experimented with, yet it was found that this approach introduced visual clutter and compromised the professional appearance of the website. Despite efforts to achieve a smooth transition using Tailwind, the desired effect could not be achieved. So I ended up scrapping the idea. I also decided that only showing the current temperature and forecast made the website look empty so I decided to do a restyle and come up with a better solution by adding more containers.

### Final Wireframe 

![finalWireFrame](https://github.com/Noah8863/React-Weather-App/assets/60634270/3d701594-fc37-494c-a4f5-32ab384848ef)

* The 3-day weather forecast restraint heavily inspired the final wireframe and design for the website. I could center the forecast data in the middle of the screen underneath the current conditions however, this would make the whole website feel long and empty with the sides containing a lot of negative space. I ended up settling with a 3 x 2 grid layout with the middle top container holding a spot for a city skyline picture. 

* Creating more containers for the website allowed me to fetch more data than originally desired and let all the weather metric containers "breathe" a bit better with proper spacing. On the far right-hand side underneath the local time was going to be a spot for nearby cities and their current temperature as well. However, this idea was also scrapped as I would need to fetch the searched city data, grab the coordinates for the city, create a radius around the city, find other popular cities in the radius, and fetch each of those cities' data as well. This would result in a significant time delay to the website and would burn through all my free requests with the API pretty fast. 

* Lastly, I knew I wanted to add some sort of animations to the website as I always like some eye candy when surfing the web. Since I was unable to make the background change (smoothly) with Tailwind, I decided to animate some of the data metrics. I found a React library called [React-Circular-ProgressBar](https://github.com/kevinsqi/react-circular-progressbar) that helped me with the windspeed animation. As for the UV Index and Humidity progress bar animation, I came up with the idea on my own after some experimentation. 

## Built With

* [React.js](https://reactjs.org/) - For component building and overall structure
* [Javascript](https://www.javascript.com/) - Being the logic
* [Tailwind.css](https://tailwindcss.com/) - Styling Library
* [Netlify](https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=kwd-371509120223&creative=514583565825&device=c&matchtype=e&location=9028776&gclid=CjwKCAjws--ZBhAXEiwAv-RNL6XfigYndRl4TKQVJSai3OwBRYdwr3gyuMDqftDeFlbvhg81z3a3cxoCnnQQAvD_BwE) - To deploy on Netlify


## Contributing

1. Fork it (https://github.com/Noah8863/Portfolio.git)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Contact

**Noah Hoffman** 
* Find me on [LinkedIn][linkedin-url]
* [GitHub Account](https://www.linkedin.com/in/noah-hoffman-9975a7121/](https://github.com/Noah8863))

[header-url]: github-template.png
[header-link]: https://github.com/alexandrerosseto

[cloud-provider-url]: https://wbshopping.herokuapp.com
[linkedin-url]: https://www.linkedin.com/in/noah-hoffman-9975a7121/
[version-image]: https://img.shields.io/badge/Version-1.0.0-brightgreen?style=for-the-badge&logo=appveyor
[version-url]: https://img.shields.io/badge/version-1.0.0-green
[Frontend-image]: https://img.shields.io/badge/Frontend-React.js-blue?style=for-the-badge
[Frontend-url]: https://img.shields.io/badge/Frontend-React.JS-blue?style=for-the-badge
