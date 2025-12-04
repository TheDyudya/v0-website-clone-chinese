import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Zap, BarChart3, ChevronDown, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">智答</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
                产品 <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">
                价格
              </a>
              <button className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
                合作伙伴 <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#bonuses" className="text-sm hover:text-primary transition-colors">
                优惠活动
              </a>
              <a href="#blog" className="text-sm hover:text-primary transition-colors">
                博客
              </a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">
                关于我们
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">
                联系方式
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                登录
              </Button>
              <Button size="sm" className="hidden md:inline-flex">
                注册
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">
                <Zap className="w-4 h-4" />
                <span>电商营销人工智能</span>
                <div className="flex gap-1">
                  <span className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-xs">淘</span>
                  <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs">京</span>
                  <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs">
                    拼
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                用人工智能自动回复评论和问题
              </h1>

              <p className="text-lg text-muted-foreground text-pretty">
                智答帮助您完全自动化淘宝、京东、拼多多和小红书的评论回复和问题解答。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  免费试用
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  预约演示 →
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full aspect-square relative">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl flex items-center justify-center">
                  <MessageSquare className="w-48 h-48 text-primary opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">6200+</div>
              <div className="text-muted-foreground">企业选择智答平台</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">500万/月</div>
              <div className="text-muted-foreground">我们的人工智能处理的评论</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">8700万+</div>
              <div className="text-muted-foreground">评论用于训练人工智能</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              我们的人工智能始终回复
              <span className="text-primary"> 独特、礼貌和有同理心</span>
            </h2>
            <p className="text-lg text-muted-foreground">同时，我们创造与您的受众沟通的积极体验</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">智答平台的功能</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">所有平台集中管理</h3>
              <p className="text-muted-foreground">
                该服务生成并发布评论和问题的回复到淘宝、京东、拼多多和小红书。可在一个窗口中访问所有平台。
              </p>
              <Button variant="link" className="p-0">
                注册 →
              </Button>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">微信小程序</h3>
              <p className="text-muted-foreground">
                微信小程序与手机版无缝集成，提供便捷的访问方式。可以随时随地管理回复，即使在移动设备上也能保持高效率。
              </p>
              <Button variant="link" className="p-0">
                连接 →
              </Button>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">评论分析</h3>
              <p className="text-muted-foreground">
                深入了解客户反馈，识别趋势和改进机会。我们的分析工具帮助您更好地理解客户需求。
              </p>
              <Button variant="link" className="p-0">
                了解更多 →
              </Button>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">多店铺支持</h3>
              <p className="text-muted-foreground">
                轻松管理多个店铺和账户。无论您有几家店铺还是几十家，我们的平台都能轻松应对。
              </p>
              <Button variant="link" className="p-0">
                开始使用 →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">准备好提升您的客户服务了吗？</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            加入6200多家已经在使用智答自动化评论回复的企业
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-base">
              免费开始
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              联系销售
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">智答</span>
              </div>
              <p className="text-sm text-muted-foreground">人工智能驱动的评论回复自动化平台</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">产品</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    功能
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    价格
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    集成
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">公司</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    博客
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    联系方式
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">支持</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    帮助中心
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    文档
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 智答. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
