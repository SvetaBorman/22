import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NestedDivs from './components/NestedDivs';
import Article from './components/Article';
import ParagraphWithBreak from './components/ParagraphWithBreak';
import ListWithLineBreaks from './components/ListWithLineBreaks';
import MultipleTags from './components/MultipleTags';
import HeaderAndFooter from './components/HeaderAndFooter';
import Image from './components/Image';
import InputField from './components/InputField';
import EmptyDiv from './components/EmptyDiv';
import EmptyFragment from './components/EmptyFragment';
import UserName from './components/UserName';
import Sum from './components/Sum';
import UndefinedVariable from './components/UndefinedVariable';
import BooleanRendering from './components/BooleanRendering';
import NumberList from './components/NumberList';
import StringArray from './components/StringArray';
import UserInfo from './components/UserInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	 <App/>
	 <NestedDivs/>
	 <Article/>
	 <EmptyFragment/>
	 <ParagraphWithBreak/>
	 <ListWithLineBreaks/>
	 <MultipleTags/>
	 <HeaderAndFooter/>
	 <Image/>
	 <InputField/>
	 <EmptyDiv/>
	 <EmptyFragment/>
	 <UserName/>
	 <Sum/>
	 <UndefinedVariable/>
	 <BooleanRendering/>
	 <NumberList/>
	 <StringArray/>
	 <UserInfo/>
	

	</React.StrictMode>
);

reportWebVitals();
