import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface Technology {
    id: number;
    name: string;
    description: string;
    category: string;
    difficulty: string;
    rating: number;
    icon: string;
}

function TechnologiesSection() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);

    useEffect(() => {
        fetch('/technologies.json')
            .then(res => res.json())
            .then(data => setTechnologies(data))
            .catch(err => console.log(err));
    }, []);

    const addToStack = (tech: Technology) => {
        if (stack.some(item => item.id === tech.id)) return;

        setStack([...stack, tech]);
        toast.success(`${tech.name} added!`);
    };

    const removeFromStack = (id: number) => {
        setStack(stack.filter(item => item.id !== id));
    };

    const clearAll = () => {
        setStack([]);
        toast.info('Stack cleared!');
    };

    return (
        <section className="p-6">
            <h2 className="text-3xl font-bold mb-2">
                Explore the <span className="text-pink-600">Technologies</span>
            </h2>

            <p className="mb-8">
                Pick your preferred technologies to build your ideal stack.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {technologies.map(tech => (
                        <div key={tech.id} className="card bg-base-100 shadow border">
                            <div className="card-body">

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10"
                                />

                                <h3 className="text-xl font-bold">
                                    {tech.name}
                                </h3>

                                <p className="text-sm">
                                    {tech.description}
                                </p>

                                <div className="flex justify-between text-xs">
                                    <span>{tech.category}</span>
                                    <span>{tech.difficulty}</span>
                                    <span>⭐ {tech.rating}</span>
                                </div>

                                <button
                                    onClick={() => addToStack(tech)}
                                    disabled={stack.some(item => item.id === tech.id)}
                                    className="btn btn-neutral w-full"
                                >
                                    {stack.some(item => item.id === tech.id)
                                        ? 'Selected'
                                        : 'Add to Stack'}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="card bg-base-100 shadow border h-fit">
                    <div className="card-body">

                        <h3 className="text-xl font-bold">Your Stack</h3>

                        {stack.length === 0 ? (
                            <p className="text-sm">Your stack is empty.</p>
                        ) : (
                            <>
                                {stack.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center p-2 bg-base-200 rounded"
                                    >
                                        <span>{item.name}</span>

                                        <button
                                            onClick={() => removeFromStack(item.id)}
                                            className="text-red-500"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}

                                <button
                                    onClick={clearAll}
                                    className="btn btn-error btn-outline mt-4"
                                >
                                    Clear All
                                </button>
                            </>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}

export default TechnologiesSection;