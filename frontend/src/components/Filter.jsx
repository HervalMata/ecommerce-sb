import {useEffect, useState} from "react";
import {FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch} from "react-icons/fi";
import {Button, FormControl, InputLabel, MenuItem, Select, Tooltip} from "@mui/material";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Filter = () => {
    const categories = [
        { categoryId: 1, categoryName: 'Laços' },
        { categoryId: 1, categoryName: 'Tiaras' },
        { categoryId: 1, categoryName: 'Viseiras' },
        { categoryId: 1, categoryName: 'Faixas' },
    ];

    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const currentCategory = searchParams.get("category") || "all";
        const currentSortOrder = searchParams.get("sortBy") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    }, [searchParams]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchTerm) {
                searchParams.set("keyword", searchTerm);
            } else {
                searchParams.delete("keyword");
            }
            navigate(`${pathname}?${searchParams.toString()}`)
        }, 700);

        return () => {
            clearTimeout(handler);
        }
    }, [searchParams, searchTerm, navigate, pathname]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;

        if (selectedCategory === "all") {
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }
        navigate(`${pathname}?${params}`)
        setCategory(event.target.value);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => {
            const newOrder = (prevOrder === "asc") ? "desc" : "asc";
            params.set("sortBy", newOrder);
            navigate(`${pathname}?${params}`);
            return newOrder;
        });
    };

    const handleClearFilters = () => {
        navigate({ pathname: window.location.pathname });
    };

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* SEARCH BAR */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    placeholder="Pesquisar Produtos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976D2]"
                />
                <FiSearch className="absolute left-3 text-slate-800 size={20}" />
            </div>

            {/* CATEGORY SELECTION */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
                <FormControl
                    className="text-slate-800 border-slate-700"
                    variant="outlined"
                    size="small"
                >
                    <InputLabel id="category-select-label">Categoria</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Categoria"
                        className="min-w-[120px] text-slate-800 border-slate-700"
                        variant="standard"
                    >
                        <MenuItem value="all">Todas</MenuItem>
                        {categories.map(category => (
                            <MenuItem key={category.categoryId} value={category.categoryId}>
                                {category.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* SORT BUTTON & CLEAR FILTER */}
                <Tooltip title="Filtrar por preço: do menor para o maior">
                    <Button
                        variant="contained"
                        color="primary"
                        className="flex items-center gap-2 h-10"
                    >
                        Filtrar Por
                        {sortOrder === "asc" ? (
                            <FiArrowUp size={20} />
                        ) : (
                            <FiArrowDown size={20} />
                        )}
                    </Button>
                </Tooltip>
                <button
                    onClick={handleClearFilters}
                    className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none"
                >
                    <FiRefreshCw className="font-semibold" size={16} />
                    <span className="font-semibold">Limpar Filtro</span>
                </button>
            </div>
        </div>
    );
}

export default Filter;
