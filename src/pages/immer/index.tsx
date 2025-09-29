import React, { useState } from 'react';
import { produce } from 'immer';

type Todo = { id: number; text: string; done: boolean }

export default function TodoWithUndoRedo() {
    const [history, setHistory] = useState<Todo[][]>([
        [
            { id: 1, text: '学习 React', done: false },
            { id: 2, text: '研究 Immer', done: false },
        ],
    ]);
    const [pointer, setPointer] = useState(0);

    const current = history[pointer];
    console.log('current', history, current);
    // 更新状态：基于当前状态生成新状态
    const update = (fn: (draft: Todo[]) => void) => {
        const newState = produce(current, fn);

        // 截断未来（避免 redo 链断裂）
        const newHistory = history.slice(0, pointer + 1);

        setHistory([...newHistory, newState]);
        setPointer(pointer + 1);
    };

    // 操作
    const toggleTodo = (id: number) => {
        update((draft) => {
            const todo = draft.find((t) => t.id === id);
            if (todo) todo.done = !todo.done;
        });
    };

    const addTodo = () => {
        const time = Date.now();
        update((draft) => {
            draft.push({ id: time, text: '新任务' + time, done: false });
        });
    };

    // Undo / Redo
    const undo = () => setPointer(Math.max(0, pointer - 1));
    const redo = () => setPointer(Math.min(history.length - 1, pointer + 1));

    return (
        <div style={{ fontFamily: 'sans-serif', marginTop: '100px' }}>
            <h2>✅ Todo with Undo/Redo (Immer)</h2>
            <ul>
                {current.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.done ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <button onClick={addTodo}>➕ 添加</button>
            <button onClick={undo} disabled={pointer === 0}>
                ⬅️ Undo
            </button>
            <button onClick={redo} disabled={pointer === history.length - 1}>
                ➡️ Redo
            </button>
            <p>
                历史步数：{pointer + 1} / {history.length}
            </p>
        </div>
    );
}
