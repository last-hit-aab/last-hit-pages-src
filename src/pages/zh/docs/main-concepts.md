---
path: "/zh/main-concepts"
date: 2019-12-23T20:09:19.962Z
title: "核心概念"
author: bradwoo8621
---

<p class="sub-title">本页讨论了为什么Last-Hit会诞生。</p>

在过去20年里，在测试领域，有很多被证明是可用的以及有效的技术和工具。他们可以做UI自动测试，包含录制、回放、持续集成、报表汇总、插件等等。那么为什么我们仍然坚持要推出Last-Hit呢？

# 最大的挑战
在网页自动测试领域，最大的挑战从来不是工具本身，而是在如何构建自动测试的方法论、背景和真正的方法实践，下面将就此三方面分别表述。

## 背景
通常，测试团队在开发技术背景上相对比较缺乏，也会有完全缺失的情况出现。他们通常无法非常深入的了解现代UI是如何工作的。与此同时，他们必须要学习那些由工具指定的技术，而这些技术又各自会拥有不同的学习曲线，对测试团队来说，这将花费相当多的时间和精力。显然，如果要深入的使用这些工具，测试团队必须首先理解现代UI的工作模式，并且通过工具提供的方式书写大量的脚本，以便应对那些复杂的场景。从这个意义上说，已经不能简单的称他们为测试人员，而应该称他们为"会熟练使用工具提供指定技术的开发人员"。

## 方法论
UI自动测试提供商通常会至少提供以下特性（无论是免费或者收费）：
- 一个工具
  - 提供录制、回放和调试功能
  - 用例维护
- 持续集成支持
- 报表汇总

无论如何选择技术，测试工具或多或少都会提供类似的特性。这里我们想澄清的观点是在自动测试领域最为重要的部分，实际上并不是这些特性，而是用例维护。  
测试团队不会过多的介入到开发流程中，这里我们所指的是真正的开发工作。实际上，他们**会**提前了解UI或者实现逻辑上的变更，但他们**无法**了解这些变化之下的世界，也就是前端开发者如何考虑需求和问题，然后决定采取何种策略更改HTML DOM和CSS。不幸的是，用例维护本质上一直是关于底层世界变动的问题。  
那么，怎么才能及时的探知底层世界的变化呢？唯一的答案是`"只有开发者知道"`，原因是开发者决定如何改善底层框架、库和组件；开发者决定如何应对特别的交互行为；开发者决定如何修复问题等等。显然，开发者才是唯一的选择，他们第一时间知道变化，他们才是去修复被变化破坏的测试用例的唯一选择。  
基于如上这些理由，Last-Hit使用最简单的JSON格式存储测试用例数据，任何人都可以简单的学会如何去维护用例数据。毕竟，他们也只是结构化数据而已，我们愿意相信即便在没有工具辅助的前提下，您也可以结合您的使用场景，找到最适合您的维护方式。  
需要再次强调的是，最重要的事恰恰是让您的开发团队介入到自动测试的工作中。他们构建了整个应用、他们在一个接一个的版本发布中间修改了大量的代码、他们首先知道变化在那里，最重要的问题是，每一个开发者都是处理大量重复数据的专家。不会有人比他们更适合维护测试用例。  
于此同时，让您的测试团队聚焦在设计和构建e2e场景，增加测试覆盖率等方面。对于一个项目或者一个企业来说，这才是测试最能体现价值的地方。当然，为了更快的实现这个目标，我们同时提供了[数据魔方](/zh/data-matrix/)，通过这种方式，可以更高效的倍增测试用例的数量和提高其质量。

## 方法实践
通过Last-Hit，我们向您介绍[我们的方法实践](/zh/thinking-in-last-hit/)，这个实践让我们大幅度改善了自动测试工作。  
另一方面，我们相信在这个领域并没有银弹，针对不同的行业、不同的场景、不同的业务领域，需要不同的方法实践，只有最适合的才是最好的。我们非常期待听到来自于您的意见和建议，帮助我们进行改善和演进，以及帮助社区共同发展，请不吝[分享您的最佳实践](https://github.com/last-hit-aab/last-hit-pages-src)给我们，下面的小节正是为您而准备。

# 最佳实践
请不要吝啬您的成功经验，在这里[分享您的最佳实践](https://github.com/last-hit-aab/last-hit-pages-src)。