---
path: "/zh/thinking-in-last-hit"
date: 2019-12-23T20:09:19.962Z
title: "如Last-Hit般思考"
author: bradwoo8621
---

<p class="sub-title">Last-Hit不仅仅是一个工具，是一种构建UI自动测试生命周期的一种思维方式。</p>

# 生态
录制和回放是UI自动测试的入门条件，但是绝不是唯一需要被关注的问题。如何构建一个完整的自动测试生态，需要考虑更多的问题。借助Last-Hit，我们很荣幸向您介绍我们的思考，希望对您有所帮助。

# 工具
工具无论如何都是必要的，使用者使用工具进行录制、回放、调试，努力使回放更平稳和顺滑。使用工具构建的测试用例最终将被部署到持续集成环境中，使用持续集成服务在不断的应用构建过程中被反复回放（译者：指回归测试），以保证系统没有被破坏。  
关于工具的更多信息，请访问[快速开始](/quick-start/)和[实用教程](/tutorial/)。

# 持续集成
我们为工具和持续集成提供了[回放器](https://www.npmjs.com/package/last-hit-replayer)。由于使用同样的回放引擎，因此测试用例仅需在工具中调试通过，他必然可以在持续集成服务中被顺利回放。考虑到系统差异性，我们使用[Puppetter](https://pptr.dev/)作为录制和回放的基础平台，Chromium作为内建浏览器工具中使用，同时在持续集成服务中使用无界面模式。

在工具中，会自动搜集回放汇总报告数据。同时，如果您在持续集成服务中运行，回放数据会被存放在您启动命令的目录以及工作空间目录，您可以很容易的找到他们，并利用他们构建任何您需要的报表。  

我们同样为企业级运用提供了[数据魔方](/data-matrix/)和[中央管理服务](/admin-server/), 令您可以更高效的使用已经存在的测试用例，同时更及时的搜集和分析回放数据。

# 测试用例维护
我们并没有在测试用例维护上提供很多特性，通常来说，没有任何手段在效率上可以超越通过代码方式进行维护。任何工具提供的特性的确已经是提供商的经验总结，他们无可厚非是可信赖和有价值的，但很难说他们是最适合的。  

行业的差距，一直不断变化的需求要求及时的响应，更不用说由于底层框架升级、用户交互体验改变等导致的变化。从这个角度看，符合各个方面要求的银弹实际上在现在是不可能存在的。  

我们使用标准JSON格式存放测试用例，目的是为了让您更方便的进行操作，找到适合您的用例维护的方法。这些数据非常方便查找，匹配和替换。我们也向社区寻求最佳实践，在这里[分享您的最佳实践](https://github.com/last-hit-aab/last-hit-pages-src)，所有这些经验都将会被汇总和重新应用，我们相信这将会帮助您更快找到适合您的场景的更有益的方法。  

最后，在我们的实践中，测试用例并不是被堪称仅仅是测试用例，我们更愿意以结构化数据的观点来思考和操作他们，跟我们对待软件产生的数据完全一样。我们的开发团队和测试团队紧密的进行合作，开发者及早的参与到测试工作中，也因此问题会被及早的发现。当测试团队从大量的重复工作中被释放出来之后，他们有能力在对场景设计，提升e2e覆盖率等方面投入更大的精力。我们认为这才是真正需要考虑的问题，您认为呢？