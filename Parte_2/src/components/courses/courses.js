// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import Curso from "./curso"


const Courses = () => {
    return (
        <div>
            <div class="row">
                <h5>Cursos</h5>
                <Curso 
                    title="Física" 
                    descReveal="Ciência que investiga as leis do universo no que diz respeito à matéria e à energia, que são seus constituintes, e suas interações." 
                    reveal="Descrição" 
                    link="Clique para saber mais" />
                <Curso title="Química" 
                    descReveal="estudo científico da constituição da matéria, suas propriedades, transformações e as leis que as regem." 
                    reveal="Descrição" 
                    link="Clique para saber mais" />
                <Curso title="Biologia" 
                    descReveal="Ciência que se preocupa com o estudo da vida nas suas mais variadas formas e níveis.." 
                    reveal="Descrição" 
                    link="Clique para saber mais" />

            </div>
        </div>
    );
};

export default Courses;