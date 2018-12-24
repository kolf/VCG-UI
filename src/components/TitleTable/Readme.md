```
const list = require('./demo.json').data.map((item, index) => ({
    ...item,
    index: index+1,
    imageUrl: item.oss176
}));
const columns = [
    {
        dataIndex: "index",
        title: "序号",
        width: 50
    },
    {
        title: "组照",
        dataIndex: "imageUrl",
        width: 210
    },
    {
        title: "组照ID",
        dataIndex: "gid"
    },
    {
        title: "供应商",
        dataIndex: "providerName"
    },
    {
        title: "推送时间",
        dataIndex: "createdate"
    },
    {
        title: "推送专题",
        dataIndex: "type_name"
    },
    {
        title: "推送人",
        dataIndex: "editorname"
    },
    {
        title: "推送结果",
        dataIndex: "ifsend",
    },
    {
        title: "抓取时间",
        dataIndex: "senddate",
    },
    {
        title: "操作",
        dataIndex: "operation",
    }
];

const titleKey = 'gtitle';

<TitleTable dataSource={list } columns={columns} titleKey={titleKey}/>
```
无数据
```
const columns = [
    {
        dataIndex: "index",
        title: "序号",
        width: 50
    },
    {
        title: "组照",
        dataIndex: "imageUrl",
        width: 210
    },
    {
        title: "组照ID",
        dataIndex: "gid"
    },
    {
        title: "供应商",
        dataIndex: "providerName"
    },
    {
        title: "推送时间",
        dataIndex: "createdate"
    },
    {
        title: "推送专题",
        dataIndex: "type_name"
    },
    {
        title: "推送人",
        dataIndex: "editorname"
    },
    {
        title: "推送结果",
        dataIndex: "ifsend",
    },
    {
        title: "抓取时间",
        dataIndex: "senddate",
    },
    {
        title: "操作",
        dataIndex: "operation",
    }
];
const titleKey = 'gtitle';
<TitleTable dataSource={[]} columns={columns} titleKey={titleKey}/>
```