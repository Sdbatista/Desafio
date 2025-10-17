// src/pages/Home.tsx

import { useTodos } from '../hooks/useTodos';
import { TaskStatus } from '../types.ts'; 

// O ícone React no canto superior esquerdo pode ser substituído por um SVG simples
const ReactIcon = () => (
  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
    <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* Ícone React simples para referência, substitua pelo seu */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 17c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" />
    </svg>
  </div>
);


export const Home = () => {
    // Usa o hook principal para acessar os dados e funções
    const { tasks, isLoading } = useTodos(); 

    // Simplesmente para exemplificar o uso:
    const pendingTasks = tasks.filter(t => t.status === TaskStatus.Pending);

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            {/* Cabeçalho - PART 1 / Todo List / Create Task */}
            <header className="flex justify-between items-center p-6 bg-white shadow-md rounded-lg mb-8">
                <div className="flex items-center space-x-4">
                    <ReactIcon />
                    <div>
                        <span className="text-gray-500 text-sm block">PART 1</span>
                        <h1 className="text-3xl font-bold text-gray-800">Todo List</h1>
                    </div>
                </div>

                {/* Botão Create Task (Azul) */}
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Create Task
                </button>
            </header>

            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b-2 border-teal-500 inline-block pb-1">All Tasks</h2>

            {/* Área de Filtros e Busca (A ser implementada aqui) */}

            {/* Lista de Tarefas (Grid de Cards) */}
            {isLoading ? (
                <p className="text-center py-10 text-gray-500">Carregando tarefas...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* AQUI VÃO OS COMPONENTES <TodoItem /> */}
                    {tasks.length === 0 ? (
                        <p className="text-center py-10 text-gray-500 md:col-span-3">Nenhuma tarefa cadastrada. Crie uma!</p>
                    ) : (
                        // Use map para renderizar os cards quando o componente TodoItem estiver pronto
                        // {tasks.map(task => <TodoItem key={task.id} task={task} />)}
                        <p className="md:col-span-3 text-gray-600">Espaço reservado para a lista de tarefas...</p>
                    )}
                </div>
            )}
        </div>
    );
};