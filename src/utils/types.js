import { v4 as uid } from 'uuid';

/**
 * @param {Object} params
 * @param {string} [params.id=uid()] - Unique identifier for the todo.
 * @param {string} params.text - Todo content.
 * @param {boolean} [params.isCompleted=false] - Whether the todo is completed.
 * @param {Date|null} [params.dueDate=null] - Due date for the todo.
 * @param {'low'|'medium'|'high'} [params.priority=PRIORITY.MEDIUM] - Priority level.
 * @param {string|null} [params.category=null] - Todo category.
 * @param {Date} [params.createdAt=new Date()] - Creation time.
 * @returns {Object} Todo entity.
 *
 * @example
 * const todo = Todo({
 *   text: 'Buy milk',
 *   priority: PRIORITY.HIGH,
 *   category: 'Groceries',
 * });
 */
export function Todo({
  id = uid(),
  text,
  isCompleted = false,
  dueDate = null,
  priority = PRIORITY.MEDIUM,
  category = null,
  createdAt = new Date().toISOString(),
} = {}) {
  return {
    id,
    text,
    isCompleted,
    dueDate,
    priority,
    category,
    createdAt,
  };
}

export const PRIORITY = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
};

export const STATUS = {
  ALL: 'All',
  COMPLETED: 'Completed',
  UNCOMPLETED: 'Uncompleted',
};
