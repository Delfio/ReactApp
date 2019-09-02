import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  // Quando a propriedade 'tech' não foi passada ele assumirá este valor!
  tech: "Oculto"
};

TechItem.propTypes = {
  /**
   * Atribuindo tipos as propriedades
   */
  tech: PropTypes.string, //Tipo string e não precisa ser obrigatória pois já está setada 'Oculto'
  onDelete: PropTypes.func.isRequired //Tipo função e é obrigatória!
};

export default TechItem;
