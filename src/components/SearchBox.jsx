import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import * as feedService from "../api/feed-api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
    const [selected, setSelected] = useState({});
    const [filteredPeople, setFilteredPeople] = useState([]);

    // console.log({ selected, filteredPeople });

    const navigate = useNavigate();

    const handleOnChangeText = async (text) => {
        const res = await feedService.searchByName(text);
        setFilteredPeople(res.data);
    };
    // {test: "a", test2: "b"} -> ["test", "test2"] Object.keys() / Object.values()
    // selcted เริ่มต้นเป็น Object เปล่า -> ใช้ Object.keys เพื่อแปลงเป็น Array ของ key ใน object -> แล้วดูว่า length > 0 มั้ย -> ถ้าไม่มากกว่า 0 แสดงกว่ายังไม่มีค่าที่ถูกเลือก
    useEffect(() => {
        if (Object.keys(selected).length > 0) {
            navigate(`/friend/${selected.id}`);
        }
    }, [selected]);

    // const filteredPeople =
    //     query === ""
    //         ? people
    //         : people.filter((person) =>
    //               person.username
    //                   .toLowerCase()
    //                   .replace(/\s+/g, "")
    //                   .includes(query.toLowerCase().replace(/\s+/g, ""))
    //           );

    // const { selected, setSelected, handleOnChangeSearch } = useFeed();

    return (
        <div className=" w-full px-2 pt-2">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-xl bg-white text-left  border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            displayValue={(person) => person.username}
                            onChange={(event) =>
                                handleOnChangeText(event.target.value)
                            }
                            placeholder="Search"
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        // afterLeave={() => setFilteredPeople([])}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPeople.length === 0 ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-teal-600 text-white"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {person.username}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active
                                                                ? "text-white"
                                                                : "text-teal-600"
                                                        }`}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>

        // <div className="w-full px-2 pt-2">
        //     <Listbox value={selected} onChange={setSelected}>
        //         <div className="relative mt-1">
        //             <Listbox.Button className="relative w-full cursor-default rounded-xl bg-white py-2 pl-3 pr-10 text-left border-2 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        //                 <span className="block truncate">
        //                     {selected?.username}
        //                 </span>
        //                 <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        //                     <ChevronUpDownIcon
        //                         className="h-5 w-5 text-gray-400"
        //                         aria-hidden="true"
        //                     />
        //                 </span>
        //             </Listbox.Button>
        //             <Transition
        //                 as={Fragment}
        //                 leave="transition ease-in duration-100"
        //                 leaveFrom="opacity-100"
        //                 leaveTo="opacity-0"
        //             >
        //                 <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        //                     {people.map((person, personIdx) => (
        //                         <Listbox.Option
        //                             key={person?.id}
        //                             className={({ active }) =>
        //                                 `relative cursor-default select-none py-2 pl-10 pr-4 ${
        //                                     active
        //                                         ? "bg-amber-100 text-amber-900"
        //                                         : "text-gray-900"
        //                                 }`
        //                             }
        //                             value={person}
        //                         >
        //                             {({ selected }) => (
        //                                 <>
        //                                     <span
        //                                         className={`block truncate ${
        //                                             selected
        //                                                 ? "font-medium"
        //                                                 : "font-normal"
        //                                         }`}
        //                                     >
        //                                         {person?.username}
        //                                     </span>
        //                                     {selected ? (
        //                                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
        //                                             <CheckIcon
        //                                                 className="h-5 w-5"
        //                                                 aria-hidden="true"
        //                                             />
        //                                         </span>
        //                                     ) : null}
        //                                 </>
        //                             )}
        //                         </Listbox.Option>
        //                     ))}
        //                 </Listbox.Options>
        //             </Transition>
        //         </div>
        //     </Listbox>
        // </div>
    );
}
