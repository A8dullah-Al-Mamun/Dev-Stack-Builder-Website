import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface Technology {
    id: string | number;
    name: string;
    description: string;
    category: string;
    difficulty: string;
    rating: number;
    icon: string;
    badge?: string;
}

function TechnologiesSection() {
    
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const response = await fetch('/technologies.json');
                const data: Technology[] = await response.json();
                setTechnologies(data);
            } catch (err) {
                console.error('Error fetching technologies:', err);
            }
        };

        fetchTechnologies();
    }, []);

    const handleAddToStack = (tech: Technology) => {
        if (!stack.some((item) => item.id === tech.id)) {
            toast.success(`${tech.name} added to your stack!`);
            setStack([...stack, tech]);
        }
    };

    const handleRemoveFromStack = (id: string | number) => {
        const removedItem = stack.find((item) => item.id === id);
        if (removedItem) {
            toast.info(`${removedItem.name} removed from your stack.`);
        }
        setStack(stack.filter((item) => item.id !== id));
    };

    const handleClearAll = () => {
        if (stack.length > 0) {
            setStack([]);
            toast.error("Cleared all technologies from your stack.");
        }
    };

    return (
        <section className="px-4 sm:px-8 lg:px-16 py-12 bg-base-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-2">
                        Explore the <span className="text-pink-600">Technologies</span>
                    </h2>
                    <p className="text-base-content/70 text-sm sm:text-base">
                        Pick your preferred technologies to build your ideal stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech) => {
                            const isSelected = stack.some((item) => item.id === tech.id);

                            return (
                                <div key={tech.id} className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="card-body p-5 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-10 h-10 flex items-center justify-center bg-base-200 rounded-lg">
                                                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                                                </div>
                                                {tech.badge && (
                                                    <span className="badge badge-ghost text-xs font-medium text-emerald-600 bg-emerald-50 border-emerald-100">
                                                        {tech.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="card-title text-lg font-bold text-base-content mb-2">
                                                {tech.name}
                                            </h3>
                                            <p className="text-base-content/70 text-xs sm:text-sm line-clamp-3 mb-6">
                                                {tech.description}
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between text-xs text-base-content/60 mb-4">
                                                <span className="badge badge-sm badge-outline">{tech.category}</span>
                                                <span className="badge badge-sm badge-ghost">{tech.difficulty}</span>
                                                <span className="flex items-center gap-1 font-medium text-base-content">
                                                    <span className="text-amber-400">★</span> {tech.rating}
                                                </span>
                                            </div>

                                            <button
                                                onClick={() => handleAddToStack(tech)}
                                                disabled={isSelected}

                                                className={`btn button-hover w-full rounded-xl text-sm font-medium transition-colors ${isSelected
                                                    ? 'btn-disabled bg-gray-100 text-gray-400 border-none cursor-not-allowed'
                                                    : 'btn-neutral bg-neutral text-neutral-content hover:bg-neutral/90'
                                                    }`}
                                            >
                                                {isSelected ? 'Selected in Stack' : 'Add to Stack'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="card bg-base-100 border border-base-200 shadow-sm sticky top-24">
                            <div className="card-body p-6">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-bold text-lg text-base-content">Your Stack</h3>
                                </div>
                                <p className="text-xs text-base-content/60 mb-6">
                                    {stack.length === 0
                                        ? 'No technologies selected yet.'
                                        : `${stack.length} item(s) selected.`}

                                </p>

                                {stack.length === 0 ? (
                                    <div className="border-2 border-dashed border-base-300 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                                        <p className="text-xs text-base-content/50">Your stack is empty.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                                        {stack.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between p-3 bg-base-200/50 rounded-xl">
                                                <div className="flex items-center gap-3">
                                                    <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                                                    <div>
                                                        <h4 className="text-xs font-bold text-base-content">{item.name}</h4>
                                                        <span className="text-[10px] text-pink-600 font-medium uppercase tracking-wider">{item.category}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveFromStack(item.id)}
                                                    className="text-error hover:cursor-pointer opacity-80 text-xs font-bold p-1"
                                                    title="Remove from stack"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}

                                    </div>

                                )}
                                {stack.length > 0 && (
                                    <div className="flex justify-center mt-6">
                                        <button
                                            onClick={handleClearAll}
                                            className="btn btn-outline btn-error w-full text-red-500 hover:bg-red-500 hover:text-white font-medium transition-colors"
                                        >
                                            Clear All


                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechnologiesSection;