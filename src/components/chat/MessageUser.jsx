/* eslint-disable react/prop-types */
export default function MessageUser({ textcontent }) {
    return (
        <div className="m-4 text-end">
            <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-2 text-sm font-medium text-purple-700">
                {textcontent}
            </span>
        </div>
    );
}
