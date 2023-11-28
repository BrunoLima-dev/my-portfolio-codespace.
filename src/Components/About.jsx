/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/socials/batman.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Como desenvolvedor web Ruby on Rails, tenho experiência em criar aplicativos web escaláveis e de alta qualidade usando o framework Ruby  on Rails e o banco de dados PostgreSQL. Tenho conhecimento em configuração de ambiente de desenvolvimento, implementação de recursos de segurança e desempenho, além de integração com serviços externos. Além disso, tenho experiência em trabalhar com o GitHub para gerenciamento de código-fonte e colaboração com outros desenvolvedores. Sou capaz de trabalhar em equipe e lidar com problemas complexos de forma eficiente. Como defensor do desenvolvimento ágil, estou comprometido em fornecer software funcional e de qualidade aos meus clientes, trabalhando em estreita colaboração com eles para entender suas necessidades e fornecer feedback rápido ao longo do processo de desenvolvimento. Estou sempre procurando aprender novas tecnologias e aprimorar minhas habilidades de desenvolvimento para fornecer soluções inovadoras e eficazes para meus clientes. Estou animado para contribuir para projetos desafiadores e fazer parte de uma equipe dinâmica e criativa.";


/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "PostgreSQL",
  "GitHub",
  "Javascript",
  "Ruby on Rails",
  "Desenvolvimento agil",
  "Bootstrap",
  "HTML",
  "CSS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Eu sou apaixonado por resolver problemas de formas criativas e inovadoras. Utilizando minha experiência eu continuamente busco novas e melhores maneiras de tornar a tecnologia acessível a todos.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre min</h2>
        <div style={{ textAlign: 'left' }}>
          <p className="large">{description}</p>
        </div>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
