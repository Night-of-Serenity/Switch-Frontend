/* eslint-disable react/prop-types */
export default function MessageOtherUser({ textcontent }) {
    return (
        <div className="m-4">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-purple-700">
                {textcontent}
            </span>
        </div>
    );
}
