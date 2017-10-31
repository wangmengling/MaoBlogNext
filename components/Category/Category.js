import React,{ Component } from "react";
import CategoryScss from "styles/Category.scss";
import { Collapse ,Menu,Icon,Button,Input,Tag,Spin,Switch} from 'antd';
const Panel = Collapse.Panel;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ['Movie', 'Books', 'Music'];
class Category extends Component {
    constructor(props){
        super(props)
    }

    state = {
        selectedTags: [],
        loading: false 
      };
      handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
                [...selectedTags, tag] :
                selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
      }
      toggle = (value) => {
        this.setState({ loading: value });
      }

    render() {
        const { selectedTags } = this.state;
        return (
            <div className="CategoryList">
                <style dangerouslySetInnerHTML={{ __html: CategoryScss }} />
                <div className="RightSearch">
                    <Search
                        placeholder="input search text"
                        style={{ width: 200 }}
                        onSearch={value => console.log(value)}
                    />
                </div>
                <div className="RightCategory">
                    <Button>安卓</Button>
                </div>
                <div className="RightArchive">
                    <strong>Hot Tags: </strong>
                    {tagsFromServer.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => this.handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                    ))}
                </div>
            </div>
        )
    }
}
export default Category;