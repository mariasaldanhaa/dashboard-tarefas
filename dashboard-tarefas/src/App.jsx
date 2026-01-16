import TaskList from './components/TaskList';
import './App.css';

function App() {
  const tasks = [
    {
      id: 1,
      titulo: "Estudar React",
      categoria: "Estudos",
      prioridade: "Alta",
      status: "Pendente",
      descricao: "Revisar conceitos básicos de React"
    },
    {
      id: 2,
      titulo: "Enviar relatório",
      categoria: "Trabalho",
      status: "Concluído",
      descricao: "Relatório mensal"
    }
  ];

  const showDescription = (descricao) => {
    alert(descricao);
  };

  return (
    <div>
      <h1>DashBoard de Atividades</h1>
      <TaskList tasks = {tasks} onShowDescription = {showDescription}/>   
    </div>
  );
}

export default App;