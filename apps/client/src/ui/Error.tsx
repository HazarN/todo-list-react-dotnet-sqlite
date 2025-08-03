type Props = {
  message?: string;
};
function Error({ message = 'Something went wrong while fetching the data.' }: Props) {
  return (
    <div className='text-red-600 bg-red-100 border border-red-300 p-4 rounded-lg shadow-sm mt-4 text-lg'>
      ⚠️ {message}
    </div>
  );
}

export default Error;
