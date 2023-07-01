// import { Fragment, useState } from 'react'
// import { Combobox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
// import SuggestFollow from '../components/common/SuggestFollow'
// import { useFeed } from '../context/FeedContext'

// const people = [
//   { id: 1, name: 'Wade Cooper' },
//   { id: 2, name: 'Arlene Mccoy' },
//   { id: 3, name: 'Devon Webb' },
//   { id: 4, name: 'Tom Cook' },
//   { id: 5, name: 'Tanya Fox' },
//   { id: 6, name: 'Hellen Schmidt' },
// ]

// export default function Search() {

//   const [selected, setSelected] = useState(people[0])
//   const [query, setQuery] = useState('')
//   const filteredPeople =
//     query === ''
//       ? people
//       : people.filter((person) =>
//           person.name
//             .toLowerCase()
//             .replace(/\s+/g, '')
//             .includes(query.toLowerCase().replace(/\s+/g, ''))
//         )

//   return (

//     <div className="form-control pt-2 pr-2 pl-2">
//       <Combobox value={selected} onChange={setSelected}>
//         <div className="relative mt-1">
//           <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//             <Combobox.Input
//               className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
//               displayValue={(person) => person.name}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//               <ChevronUpDownIcon
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </Combobox.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//             afterLeave={() => setQuery('')}
//           >
//             <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {filteredPeople.length === 0 && query !== '' ? (
//                 <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                   Nothing found.
//                 </div>
//               ) : (
//                 filteredPeople.map((person) => (
//                   <Combobox.Option
//                     key={person.id}
//                     className={({ active }) =>
//                       `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                         active ? 'bg-teal-600 text-white' : 'text-gray-900'
//                       }`
//                     }
//                     value={person}
//                   >
//                     {({ selected, active }) => (
//                       <>
//                         <span
//                           className={`block truncate ${
//                             selected ? 'font-medium' : 'font-normal'
//                           }`}
//                         >
//                           {person.name}
//                         </span>
//                         {selected ? (
//                           <span
//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                               active ? 'text-white' : 'text-teal-600'
//                             }`}
//                           >
//                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                         ) : null}
//                       </>
//                     )}
//                   </Combobox.Option>
//                 ))
//               )}
//             </Combobox.Options>
//           </Transition>
//         </div>
//       </Combobox>
//     </div>

//   );
// }

// <div className="form-control pt-2 pr-2 pl-2">
{
    /* <input
        type="text"
        placeholder="Search"
        className="input border-2 input-bordered w-full rounded-full md:w-auto"
      /> */
}
{
    /* </div> */
}

// import { useState } from "react";
// import * as feedService from "../api/feed-api";
// import { HiMagnifyingGlass } from "react-icons/hi2";


// const Search = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [searchResults, setSearchResults] = useState([]);

//     const handleInputChange = (e) => {
//         setSearchQuery(e.target.value);
//         console.log(searchQuery)
//     };

//     const handleSearch = () => {
//         const res = feedService.search();
//         setSearchResults(res.data);
//         setSearchQuery("");
//     };

//     return (
//         <div className="  p-2  ">
//             <input
//             className="rounded-lg w-5/6"
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleInputChange}
//                 placeholder="Search"
//             />
//             <button onClick={handleSearch}>
//                 <HiMagnifyingGlass className="w-8 h-8 pt-2 "/>
//             </button>

//             <ul>
//                 {searchResults.map((result) => (
//                     <li key={result.id}>{result.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Search;


import { useState } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";


const Search = ({user}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  


  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log(searchQuery)
  const performSearch = () => {

    const filteredResults = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className=' pt-2 pr-2 pl-2'>
      <input className='rounded-lg w-5/6'
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />
      <button onClick={performSearch}>
      <HiMagnifyingGlass className="w-8 h-8 pt-2 "/>
      </button>

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
       
      </ul>
    </div>
  );
};

export default Search;

