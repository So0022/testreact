import { Dropdown, Menu, Tree, TreeDataNode } from 'antd';
import {
  CarryOutOutlined,
  MoreOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { first, icons } from 'ckeditor5';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Task from './Task';
import './task.css';
function TaskTree() {
  // const treeData: TreeDataNode[] = [
  //   {
  //     title: 'parent 1',
  //     key: '0-0',
  //     icon: <CarryOutOutlined />,
  //     children: [
  //       {
  //         title: 'parent 1-0',
  //         key: '0-0-0',
  //         icon: <CarryOutOutlined />,
  //         children: [
  //           { title: 'leaf 1111', key: '0-0-0-0', icon: <CarryOutOutlined /> },
  //           {
  //             title: 'test',
  //             key: '0-0-0-1',
  //             icon: <CarryOutOutlined />,
  //           },
  //           { title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined /> },
  //         ],
  //       },
  //       {
  //         title: 'parent 1-1',
  //         key: '0-0-1',
  //         icon: <CarryOutOutlined />,
  //         children: [
  //           { title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined /> },
  //         ],
  //       },
  //       {
  //         title: 'parent 1-2',
  //         key: '0-0-2',
  //         icon: <CarryOutOutlined />,
  //         children: [
  //           { title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined /> },
  //           {
  //             title: 'leaf',
  //             key: '0-0-2-1',
  //             icon: <CarryOutOutlined />,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: 'parent 2',
  //     key: '0-1',
  //     icon: <CarryOutOutlined />,
  //     children: [
  //       {
  //         title: 'parent 2-0',
  //         key: '0-1-0',
  //         icon: <CarryOutOutlined />,
  //         children: [
  //           { title: 'leaf', key: '0-1-0-0', icon: <CarryOutOutlined /> },
  //           { title: 'leaf', key: '0-1-0-1', icon: <CarryOutOutlined /> },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const data = [
    {
      id: 1,
      name: 'Home',
      parent_id: null,
      title: 'Welcome to our website!111111111111111111',
      task: 'Task1'
    },
    {
      id: 2,
      name: 'About',
      parent_id: null,
      title: 'Learn more about us',
      task: 'Task2'
    },
    {
      id: 3,
      name: 'Team',
      parent_id: 2,
      title: 'Meet our talented team',
      task: 'Task3'
    },
    {
      id: 4,
      name: 'Contact',
      parent_id: 2,
      title: 'Get in touch with us',
      task: 'Task4'
    },
    {
      id: 5,
      name: 'Services',
      parent_id: null,
      title: 'Explore our services',
      task: 'Task5'
    },
    {
      id: 6,
      name: 'Development',
      parent_id: 5,
      title: 'Expert web development services',
      task: 'Task6'
    },
    {
      id: 7,
      name: 'Design',
      parent_id: 5,
      title: 'Professional web design services',
      task: 'Task7'
    },
    {
      id: 8,
      name: 'Consulting',
      parent_id: 5,
      title: 'Comprehensive digital marketing consulting',
      task: 'Task8'
    },
    {
      id: 9,
      name: 'Web Development',
      parent_id: 6,
      title: 'Custom web development solutions',
      task: 'Task9'
    },
    {
      id: 10,
      name: 'Mobile App Development',
      parent_id: 9,
      title: 'Expert mobile app development services',
      task: 'Task10'
    },
    {
      id: 11,
      name: 'E-commerce Development',
      parent_id: 6,
      title: 'Custom e-commerce development solutions',
      task: 'Task11'
    },
    {
      id: 12,
      name: 'UI/UX Design',
      parent_id: 7,
      title: 'User-centered UI/UX design services',
      task: 'Task12'
    },
    {
      id: 13,
      name: 'Branding',
      parent_id: 7,
      title: 'Comprehensive branding services',
      task: 'Task13'
    },
    {
      id: 14,
      name: 'Digital Marketing',
      parent_id: 8,
      title: 'Expert digital marketing services',
      task: 'Task14'
    },
    {
      id: 15,
      name: 'SEO',
      parent_id: 8,
      title: 'Custom SEO solutions',
      task: 'Task15'
    },
    {
      id: 16,
      name: 'Social Media Marketing',
      parent_id: 8,
      title: 'Expert social media marketing services',
      task: 'Task16'
    }
  ];
  const handleNewFileClick = (id) => {
    console.log('This will add new file to', id);
  };
  const createTreeData = (
    data: any[],
    key: string,
    id: any,
  ): any[] => {
    const treeData = [];
    const prcessData = data.filter((item) => item.parent_id == id);
    const remainData = data.filter((item) => item.parent_id != id);
    if(key.length > 6) return [];
    for (let i = 0; i < prcessData.length; i++) {
      const dataKey = `${key}-${i}`;
      let menu = (
        <Menu>
          <Menu.Item key={`newfile${prcessData[i].id}`} onClick={handleNewFileClick(prcessData[i].id)}>New File</Menu.Item>
          <Menu.Item key={`newtask${prcessData[i].id}`}>New Task</Menu.Item>
          <Menu.Item key={`deletecategory${prcessData[i].id}`}>Delete Category</Menu.Item>
        </Menu>
      );
      if(dataKey.length >4){
        menu = (
          <Menu>
            <Menu.Item key="1">New File</Menu.Item>
            <Menu.Item key="3">Delete Category</Menu.Item>
          </Menu>
        );
      };
      
      treeData.push({
        // title: prcessData[i].title,
        title: (
          <div className='category-item'>
            <div className="title">
              <span>
              {prcessData[i].title}
              </span>
            </div>
            <div className="dropdown-container">
              <Dropdown overlay={menu} trigger={['click']} className="dropdown">
                <MoreOutlined className="icon" />
              </Dropdown>
            </div>
          </div>
        ),
        key: dataKey,
        selected:true,
        children: createTreeData(remainData,  dataKey, prcessData[i].id),
      });
    }
    return treeData;
  };
  const treeData1 = createTreeData(data, '0', null);

  const tasks = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Task title ${index + 1}`,
  }));

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <div className="task-wrapper">
      <div className="task-menu" >
        <Tree
          showLine={true}
          showIcon={true}
          defaultExpandedKeys={['0-0-0']}
          onSelect={onSelect}
          treeData={treeData1}
          className='task-tree'
        />
      </div>
      <div>
        <Outlet />
      </div>
      {/* <div className="task-list">
        {tasks.map((task) => (
          <div className="task-item" key={task.id} onClick={() => handleOnTask('eTask')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SnippetsOutlined />
              <div className="task-title">{task.title}</div>
            </div>
            <MoreOutlined />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TaskTree;
