
import CardDark from "../uiDark/TemplateDark";

function ChannelList({ channels, onChannelChange }) {
  return (
    <div id="channel-list">
      <CardDark>
        <ul className="bg-green-500 dark:bg-slate-900 px-4 py-4  grid grid-cols-3 md:grid-cols-4 gap-4 ">
          {channels.map((channel) => (
            <li key={channel.name} className="mb-3">
              <button
                // href="#"
                onClick={() => onChannelChange(channel.url)}
                className="bg-slate-500 py-2 px-4 rounded-lg text-white"
              >
                {channel.name}
              </button>
            </li>
          ))}
        </ul>
      </CardDark>
    </div>
  );
}
export default ChannelList;
