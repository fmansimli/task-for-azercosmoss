interface Area {
  name: string;
}

interface IProps {
  areas: Area[];
  onChange: (selectedArea: string) => void;
}

const AreasFilter: React.FC<IProps> = (props) => {
  function onChangeHandler(event: React.ChangeEvent<HTMLSelectElement>): void {
    props.onChange(event.target.value);
  }

  return (
    <div className="">
      <select name="" id="" onChange={onChangeHandler}>
        {props.areas.map((area, key) => (
          <option key={key} value={area.name}>
            {area.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AreasFilter;
