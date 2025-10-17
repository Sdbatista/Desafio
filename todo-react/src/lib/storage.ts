// src/lib/storage.ts

// src/lib/storage.ts
import type {  Task } from '../types'; // Importe a interface Task que definimos antes
 // Importe a interface Task que definimos antes

const STORAGE_KEY = 'todo-list-tasks';

/**
 * Carrega a lista de tarefas do LocalStorage.
 * @returns {Task[]} A lista de tarefas ou um array vazio se não houver dados.
 */
export function loadTasks(): Task[] {
    try {
        const serializedTasks = localStorage.getItem(STORAGE_KEY);
        if (serializedTasks === null) {
            return []; // Retorna array vazio se não houver nada
        }
        return JSON.parse(serializedTasks) as Task[];
    } catch (e) {
        console.error("Erro ao carregar tarefas do LocalStorage", e);
        // Retorna um array vazio para evitar quebrar a aplicação em caso de erro
        return [];
    }
}

/**
 * Salva a lista de tarefas no LocalStorage.
 * @param {Task[]} tasks A lista de tarefas a ser salva.
 */
export function saveTasks(tasks: Task[]): void {
    try {
        const serializedTasks = JSON.stringify(tasks);
        localStorage.setItem(STORAGE_KEY, serializedTasks);
    } catch (e) {
        console.error("Erro ao salvar tarefas no LocalStorage", e);
        // Em um projeto real, você poderia adicionar um feedback visual de erro aqui[cite: 33].
    }
}