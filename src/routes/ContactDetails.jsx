import { useNavigate, useParams } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();

  // communication with API
  const handleContact = () => {
    console.log("Contato Enviado");
    return navigate("/");
  };

  const navigate = useNavigate();

  return (
    <>
      <div>Exibindo mais info do contato {id}</div>
      <button onClick={handleContact}>Enviar Mensagem</button>
    </>
  );
};

export default ContactDetails;
