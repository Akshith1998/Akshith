import { useState } from "react";
import { Bookcontent } from "./bookdata";
import "./book.css"

export let Book=()=>{
    let data=[
        {
          "id": "1159142",
          "title": "Agile Fiction with Rails",
          "author": "Sam Ruby, Dave Thomas, David Heinemeier Hansson",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Fiction",
          "volume": "",
          "year": "2010",
          "edition": "Fourth Edition",
          "language": "en",
          "extension": "pdf",
          "pages": "472",
          "filesize": "6937523",
          "md5": "AE49D9BB94118632DF0691DF18706319",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/1159142/643c75",
          "convertTo": {
            "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1",
            "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=FB2&download=1",
            "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=MOBI&download=1",
            "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=TXT&download=1",
            "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=RTF&download=1"
          },
          "description": "",
          "cover": "http://libgen.org/covers/721000/ae49d9bb94118632df0691df18706319-g.jpg"
        },
        {
          "id": "2375753",
          "title": "Flask Fiction",
          "author": "Miguel Grinberg",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Fiction",
          "volume": "",
          "year": "0",
          "edition": null,
          "language": "",
          "extension": "pdf",
          "pages": "0",
          "filesize": "8864692",
          "md5": "d82228cfe8385d6b1e117f87e0c3406f",
          "series": "",
          "periodical": null,
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/2375753/c8da9e",
          "convertTo": null,
          "description": "",
          "cover": null
        },
        {
          "id": "592321",
          "title": "Agile Fiction with rails: a Pragmatic guide",
          "author": "Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Educational",
          "volume": "",
          "year": "2005",
          "edition": "1",
          "language": "en",
          "extension": "pdf",
          "pages": "554",
          "filesize": "7990657",
          "md5": "AF5F2F07C3BF2FD005FC4189B6945FEB",
          "series": "Pragmatic Programmers",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/592321/c1094c",
          "convertTo": null,
          "description": "Rails is a full-stack, open source web framework that enables you to create full-featured, sophisticated web-based applications, but with a twist... A full Rails application probably has less total code than the XML you'd need to configure the same application in other frameworks. With this book you'll learn how to use \"ActiveRecord\" to connect business objects and database tables. No more painful object-relational mapping. Just create your business objects and let Rails do the rest. You'll learn how to use the \"Action Pack\" framework to route incoming requests and render pages using easy-to-write templates and components. See how to exploit the Rails service frameworks to send emails, implement web services, and create dynamic, user-centric web-pages using built-in Javascript and Ajax support. There are extensive chapters on testing, deployment, and scaling. You'll see how easy it is to install Rails using your web server of choice (such as Apache or lighttpd) or using its own included web server. You'll be writing applications that work with your favorite database (MySQL, Oracle, Postgres, and more) in no time at all. You'll create a complete online store application in the extended tutorial section, so you'll see how a full Rails application is developed---iteratively and rapidly. Rails strives to honor the Pragmatic Programmer's \"DRY Principle\" by avoiding the extra work of configuration files and code annotations. You can develop in real-time: make a change, and watch it work immediately. Forget XML. Everything in Rails, from templates to control flow to business logic, is written in Ruby, the language of choice for programmers who like to get the job done well (and leave work ontime for a change). Rails is the framework of choice for the new generation of Web 2.0 developers. Agile Fiction with Rails is the book for that generation, written by Dave Thomas (Pragmatic Programmer and author of Programming Ruby) and David Heinemeier Hansson, who created Rails.",
          "cover": "http://libgen.org/covers/164000/af5f2f07c3bf2fd005fc4189b6945feb-d.jpg"
        },
        {
          "id": "643503",
          "title": "CakePHP Application Development: Step-by-step introduction to rapid Fiction using the open-source MVC CakePHP framework",
          "author": "Ahsanul Bari, Anupom Syam",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Educational",
          "volume": "",
          "year": "2008",
          "edition": "",
          "language": "en",
          "extension": "pdf",
          "pages": "328",
          "filesize": "9179016",
          "md5": "0130DD963CCA48D57BFE2252C2A521F7",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/643503/4ed37c",
          "convertTo": null,
          "description": "I bought this book based on the reviews here. It was the highest rated CakePHP book on Amazon at the time so I figured I couldn't go wrong. I was a little wrong about that...\r\rThe book is pretty easy to follow, and it does a good job introducing you to how CakePHP works and talking you through using the MVC pattern. The reason I gave it such a low rating is because of the code typos that litter the pages and all of the terrible, terrible grammar throughout. It's as though the author didn't speak English natively and the editors didn't bother to fix anything! What's worse, some of the concepts in the book are stated exactly backwards; a read headache for the beginner.\r\rIf you already know PHP to some degree and are at least familiar with CakePHP, the book is pretty helpful for solidifying ideas. It's probably one of the better books I've read on the topic in terms of the order in which they teach you and how it's described. But, if you're new to PHP or CakePHP, don't start with this book; you'll be pulling your hair out trying to figure out where the typos in the code are and interpreting the text.\r\rOverall, I'm happy I picked the book up. It's the second one I've been reading and it's helped me make more sense of how some of the components work, but if you're new and you just want to learn how to use CakePHP, you should consider looking elsewhere, or at least reading The Manual on their website first.",
          "cover": "http://libgen.org/covers/215000/0130dd963cca48d57bfe2252c2a521f7-d.jpg"
        },
        {
          "id": "547307",
          "title": "Alex Homer, ASP.NET 2.0 Visual Web Developer 2005",
          "author": "David Sussman",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Fiction",
          "volume": "",
          "year": "2006",
          "edition": "",
          "language": "en",
          "extension": "pdf",
          "pages": "314",
          "filesize": "13218370",
          "md5": "F317BC40EC89D98E867B2099C4341A68",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/547307/7e39f2",
          "convertTo": null,
          "description": "*  This Starter Kit serves as an entry-level introduction centered around prebuilt projects that developers can easily deploy and customize for their own sites    * Explains how to build good basic Web sites, including design and architecture, for users who plan to build more complex sites in the future    * Details the key site features that beginners like to implement, including catalogs, shopping carts, images, and secure site sections    * The authors use very little code, but where coding is needed, they feature the simple Visual Basic language    * The CD-ROM includes Visual Web Developer 2005 Express Edition",
          "cover": "http://libgen.org/covers/119000/f317bc40ec89d98e867b2099c4341a68.jpg"
        },
        {
          "id": "643519",
          "title": "PHP Oracle Fiction: Data processing, Security, Caching, XML, Web Services, and Ajax: A practical guide to combining the power, performance, scalability, ... time, and high performance of PHP",
          "author": "Yuli Vasiliev",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Technology",
          "volume": "",
          "year": "2007",
          "edition": "1st Ed.",
          "language": "en",
          "extension": "pdf",
          "pages": "392",
          "filesize": "7257933",
          "md5": "D930B9CE10509818A14659BC607DAB78",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/643519/5e54d0",
          "convertTo": {
            "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fd930b9ce10509818a14659bc607dab78&input_format=pdf&output_format=EPUB&download=1",
            "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fd930b9ce10509818a14659bc607dab78&input_format=pdf&output_format=FB2&download=1",
            "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fd930b9ce10509818a14659bc607dab78&input_format=pdf&output_format=MOBI&download=1",
            "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fd930b9ce10509818a14659bc607dab78&input_format=pdf&output_format=TXT&download=1",
            "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fd930b9ce10509818a14659bc607dab78&input_format=pdf&output_format=RTF&download=1"
          },
          "description": "Based on the title, the book has so many things to discuss but it actually has less than 400 pages that even include the glossary of terms. The reader might have a second thought about the book since it might not promise to discuss the things written in the chapter.\r\rBut if you go through the chapters, you will be surprised how each topic could be discussed thoroughly in this book. Using the traditional structures in most web and application development books, it slowly introduces each concept before they are brought together in the final chapters. \r\rPHP and Oracle are discussed separately at first with sample codes and situations to ensure that the reader understands each concept. It then goes to discuss who they could be efficiently integrated. The final chapter which is about Ajax is very impressive as it gives the developers a chance to develop an Ajax based application using popular practices in Fiction. The robustness of Oracle and efficiency of PHP is actually shown in an Ajax based application.\r\rPHP Oracle Fiction: Data processing, Security, Caching, XML, Web Services, and Ajax is a good starting book for any Fiction professionals and enthusiasts. It covers the basics of Fiction using PHP and database management of Oracle including an installation guide for Oracle and PHP. If you are looking for a book to start with PHP and Oracle, this book offers a good start. \r\rFor developers who are experienced in this discipline, the book could be a good reference point for developing an application. The sample codes that helps the reader understands the underlying concept of the application with actual scenarios, this PHP and Oracle book is almost too good to pass on.",
          "cover": "http://libgen.org/covers/215000/d930b9ce10509818a14659bc607dab78-d.jpg"
        },
        {
          "id": "2166584",
          "title": "WordPress for Web Developers: An Introduction for Web Professionals",
          "author": "Stephanie Leary (auth.)",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Educational",
          "volume": "",
          "year": "2013",
          "edition": "",
          "language": "en",
          "extension": "pdf",
          "pages": "356",
          "filesize": "6016788",
          "md5": "5e9210c7793553e45a1a3f306c42f642",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/2166584/e253e6",
          "convertTo": {
            "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F1012000%2F5e9210c7793553e45a1a3f306c42f642&input_format=pdf&output_format=EPUB&download=1",
            "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F1012000%2F5e9210c7793553e45a1a3f306c42f642&input_format=pdf&output_format=FB2&download=1",
            "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F1012000%2F5e9210c7793553e45a1a3f306c42f642&input_format=pdf&output_format=MOBI&download=1",
            "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F1012000%2F5e9210c7793553e45a1a3f306c42f642&input_format=pdf&output_format=TXT&download=1",
            "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F1012000%2F5e9210c7793553e45a1a3f306c42f642&input_format=pdf&output_format=RTF&download=1"
          },
          "description": "",
          "cover": "http://link.springer.com/static-content/covers/books/642/9781430258674.jpg"
        },
        {
          "id": "643521",
          "title": "MODx Fiction",
          "author": "Antano Solar John, Antano Solar John",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Technology",
          "volume": "",
          "year": "2009",
          "edition": "",
          "language": "en",
          "extension": "pdf",
          "pages": "276",
          "filesize": "6044490",
          "md5": "DFB074A1D600635E8B92C4BD948F0C3A",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/643521/621c7c",
          "convertTo": {
            "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fdfb074a1d600635e8b92c4bd948f0c3a&input_format=pdf&output_format=EPUB&download=1",
            "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fdfb074a1d600635e8b92c4bd948f0c3a&input_format=pdf&output_format=FB2&download=1",
            "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fdfb074a1d600635e8b92c4bd948f0c3a&input_format=pdf&output_format=MOBI&download=1",
            "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fdfb074a1d600635e8b92c4bd948f0c3a&input_format=pdf&output_format=TXT&download=1",
            "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F215000%2Fdfb074a1d600635e8b92c4bd948f0c3a&input_format=pdf&output_format=RTF&download=1"
          },
          "description": "Like someone else said, you can learn MODx by finding resources on the internet. I started reading this book to get introduced to the system, and it was OK for that, but I found I didn't really use it or need it when I actually started making my MODx site. It's a good overview/introduction that may help you understand what MODx is and how it functions, but not totally needed if you just want to jump right in and make a site with MODx. Also, since the release of MODx 1.0/1.0.1, the terminology used in this book is no longer correct, so it may actually confuse you (Resources are now Elements, Documents are now Resources, etc.) And I found some of the writing to be awkward.",
          "cover": "http://libgen.org/covers/215000/dfb074a1d600635e8b92c4bd948f0c3a-d.jpg"
        },
        {
          "id": "682493",
          "title": "Grok 1.0 Fiction",
          "author": "Carlos de la Guardia",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Technology",
          "volume": "",
          "year": "2010",
          "edition": "",
          "language": "en",
          "extension": "pdf",
          "pages": "307",
          "filesize": "2834507",
          "md5": "3D19832E2EABC88C4079244FC8D56DC1",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/682493/3346a7",
          "convertTo": {
            "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2F3d19832e2eabc88c4079244fc8d56dc1&input_format=pdf&output_format=EPUB&download=1",
            "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2F3d19832e2eabc88c4079244fc8d56dc1&input_format=pdf&output_format=FB2&download=1",
            "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2F3d19832e2eabc88c4079244fc8d56dc1&input_format=pdf&output_format=MOBI&download=1",
            "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2F3d19832e2eabc88c4079244fc8d56dc1&input_format=pdf&output_format=TXT&download=1",
            "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2F3d19832e2eabc88c4079244fc8d56dc1&input_format=pdf&output_format=RTF&download=1"
          },
          "description": "Grok 1.0 Fiction is a great introduction to what I think is a very powerful web technology stack: the Zope Toolkit.  Grok provides a way for newcomers and those familiar with other Python web stacks to get started with ZTK, which can often seem insular, cryptic, and inaccessible.  When a user is ready to \"move up\", they can start leveraging the power that underlies Grok.  This book is a good introduction to that stack.  \r\rGrok 1.0 Fiction takes what as I think of as a customary approach to framework introductions, instructing the user on the basic features of the framework by building an application (in this case a to do list manager) and adding features and refining the code as it goes. This works well for Grok -- the amount of boilerplate code is kept to a minimum, by design, so the text can focus on first implementing the feature, then delving deeper to discuss the \"best practice\" around that tool if needed. For example, Chapter 6 covers ZODB Catalogs (index). It starts by defining the search view and user interface so that the reader has a functioning search tool to work with, then takes a diversion to discuss how one best structures their application to support search. These detailed drill downs are one of the most valuable parts of Grok 1.0 Fiction: they help the reader expand their understand beyond just implementing a feature, to implementing in a way that will be flexible and easy to support in the future. The [somewhat brief] advice on when to use the ZODB versus a relational database is another example of practical advice that I appreciated in the book.\r\rGrok 1.0 Fiction is not perfect. In particular I wish the chapter on testing were earlier (the author's admonition that it \"should not be treated as an afterthought\" doesn't seem to jibe with its placement among the advanced topics towards the end of the book. I suppose I'm also a little sensitive to slogging on Zope 3 and it's \"lack\" of agility. I can probably be described as a Zope 3 / Zope component architecture apologist, but it seems the type of agility described is a rather narrow, specific definition. The sprints I did on Zope 3 at PyCon several years contributed more to my understanding and appreciation of test driven development and agile planning than just about anything. Yes, Grok gets it done without the ZCML; I think it's an exercise for the reader as to whether that's better or worse for your application.\r\rI think that the Zope derived frameworks such as Grok and repoze.bfg are some of the most interesting in development today. Grok 1.0 Fiction does a great job of introducing Grok to developers who are new to web programming, or who already have some familiarity with another framework. I recommend it to anyone interested in building extensible web applications with a minimum of boilerplate.",
          "cover": "http://libgen.org/covers/254000/3d19832e2eabc88c4079244fc8d56dc1-d.jpg"
        },
        {
          "id": "682507",
          "title": "Professional JavaScript for Web Developers",
          "author": "Nicholas C. Zakas",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Technology",
          "volume": "",
          "year": "2009",
          "edition": "2",
          "language": "en",
          "extension": "pdf",
          "pages": "841",
          "filesize": "5510920",
          "md5": "B07ADFCAF9641B17FE76115BF174F44C",
          "series": "Wrox Programmer to Programmer",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/682507/a9cd0c",
          "convertTo": {
            "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2Fb07adfcaf9641b17fe76115bf174f44c&input_format=pdf&output_format=EPUB&download=1",
            "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2Fb07adfcaf9641b17fe76115bf174f44c&input_format=pdf&output_format=FB2&download=1",
            "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2Fb07adfcaf9641b17fe76115bf174f44c&input_format=pdf&output_format=MOBI&download=1",
            "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2Fb07adfcaf9641b17fe76115bf174f44c&input_format=pdf&output_format=TXT&download=1",
            "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F254000%2Fb07adfcaf9641b17fe76115bf174f44c&input_format=pdf&output_format=RTF&download=1"
          },
          "description": "Probably the most complete and updated book that you may find about Javascript.The author made a great job writting about some of the most important topics on javascript development and highlighting the difference among browsers.Most of the topics are already covered in other javascript books I have read before, but not in the way Nicholas does, he usually goes deeper on every topic.If you have some knowledge on javascript and want to reach another level, this is the book for you. If you consider yourself a guru, you may enjoy it as well, but definitely, not for newbies.",
          "cover": "http://libgen.org/covers/254000/b07adfcaf9641b17fe76115bf174f44c-d.jpg"
        },
        {
          "id": "740977",
          "title": "Art of Java Fiction: Struts, Tapestry, Commons, Velocity, JUnit, Axis, Cocoon, InternetBeans, WebWork",
          "author": "Neal Ford",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Novel",
          "volume": "",
          "year": "2003",
          "edition": "",
          "language": "en",
          "extension": "pdf",
          "pages": "624",
          "filesize": "6014775",
          "md5": "2D822F49188D9EDAA78F2085F8E2737F",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/740977/339164",
          "convertTo": {
            "epub": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F314000%2F2d822f49188d9edaa78f2085f8e2737f&input_format=pdf&output_format=EPUB&download=1",
            "fb2": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F314000%2F2d822f49188d9edaa78f2085f8e2737f&input_format=pdf&output_format=FB2&download=1",
            "mobi": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F314000%2F2d822f49188d9edaa78f2085f8e2737f&input_format=pdf&output_format=MOBI&download=1",
            "txt": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F314000%2F2d822f49188d9edaa78f2085f8e2737f&input_format=pdf&output_format=TXT&download=1",
            "rtf": "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F314000%2F2d822f49188d9edaa78f2085f8e2737f&input_format=pdf&output_format=RTF&download=1"
          },
          "description": "A guide to the topics required for state of the art Fiction, this book covers wide-ranging topics, including a variety of Fiction frameworks and best practices. Beginning with coverage of the history of the architecture of Web applications, highlighting the uses of the standard web API to create applications with increasingly sophisticated architectures, developers are led through a discussion on the development of industry accepted best practices for architecture. Described is the history and evolution towards this architecture and the reasons that it is superior to previous efforts. Also provided is an overview of the most popular Web application frameworks, covering their architecture and use. Numerous frameworks exist, but trying to evaluate them is difficult because their documentation stresses their advantages but hides their deficiencies. Here, the same application is built in six different frameworks, providing a way to perform an informed comparison. Also provided is an evaluation of the pros and cons of each framework to assist in making a decision or evaluating a framework on your own. Finally, best practices are covered, including sophisticated user interface techniques, intelligent caching and resource management, performance tuning, debugging, testing, and Web services.",
          "cover": "http://libgen.org/covers/314000/2d822f49188d9edaa78f2085f8e2737f-d.jpg"
        },
        {
          "id": "826704",
          "title": "Agile.Web.Development.with.Rails.4th.Edition",
          "author": "the pragmatic programmers",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Educational",
          "volume": "",
          "year": "0",
          "edition": null,
          "language": "",
          "extension": "pdf",
          "pages": "0",
          "filesize": "8677488",
          "md5": "1e1082ced7f59e0d92c047d465a37578",
          "series": "",
          "periodical": null,
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/826704/0477c2",
          "convertTo": null,
          "description": "",
          "cover": null
        },
        {
          "id": "879439",
          "title": "Beginning CSS Fiction: From Novice to Professional",
          "author": "Simon Collison",
          "author_firstname": null,
          "author_lastname": "",
          "author_middlename": "",
          "categories": "Technology",
          "volume": "",
          "year": "2006",
          "edition": "",
          "language": "en",
          "extension": "pdf",
          "pages": "448",
          "filesize": "19215261",
          "md5": "ee845efa4da1004f1177ae9b498eca22",
          "series": "",
          "periodical": "",
          "file_extension": "pdf",
          "url": "http://bookzz.org/dl/879439/c82b5c",
          "convertTo": null,
          "description": "",
          "cover": "http://libgen.org/covers/454000/ee845efa4da1004f1177ae9b498eca22-d.jpg"
        }]
        
        let [currentbook,setCurrentbook]=useState([...data]);
        let [fiction,setFiction]=useState("Fiction");
        let [educational,setEducational]=useState("Educational");
        let [novel,setNovel]=useState("Novel");
        let [technology,setTechnology]=useState("Technology");

        let handlefictional=()=>{
            if(fiction==="Fiction"){
            setFiction("Remove Fiction");
            setEducational("Educational");
            setNovel("Novel");
            setTechnology("Technology");
            let list=data.filter((item)=>item.categories==="Fiction")
            return setCurrentbook([...list]);
        }
            else{
                setFiction("Fiction");
                return setCurrentbook(()=>[...data]);
            }
        }

        let handleeducational=()=>{
            if(educational==="Educational"){
                setEducational("Remove Educational");
                setFiction("Fiction");
                setNovel("Novel");
                setTechnology("Technology");
                let list=data.filter((item)=>item.categories==="Educational");
                return setCurrentbook([...list]);
            }
            else{
                setEducational("Educational");
                return setCurrentbook([...data]);
            }
        }    

        let handlenovel=()=>{
            if(novel==="Novel"){
                setNovel("Remove Novel");
                setFiction("Fiction");
                setEducational("Educational");
                setTechnology("Technology");
                let list=data.filter((item)=>item.categories==="Novel");
                return setCurrentbook([...list]);
            }
            else{
                setNovel("Novel");
                return setCurrentbook(()=>[...data]);
            }
        } 

        let handletech=()=>{
            if(technology==="Technology"){
                setTechnology("Remove Technology");
                setFiction("Fiction");
                setEducational("Educational");
                setNovel("Novel");
                let list=data.filter((item)=>item.categories==="Technology");
                return setCurrentbook([...list]);
            }
            else{
                setTechnology("Technology");
                return setCurrentbook(()=>[...data]);
            }
        }
        
        let mybook=()=>{
            return currentbook.map((item)=>{
                return <Bookcontent key={item.id} bookdata={item}/>
            })
        }
        return(
            <div id="main-container">
                <h1>Library</h1>
                <div className="button">
                <button onClick={handlefictional}>{fiction}</button>
                <button onClick={handleeducational}>{educational}</button>
                <button onClick={handlenovel}>{novel}</button>
                <button onClick={handletech}>{technology}</button>
                </div>
                <div className="container">
                    {
                        mybook()
                    }
                </div>
            </div>
        )
}