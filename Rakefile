# Rakefile

desc "Create a new SCSS Module"
namespace :module do
  task :create do
    ARGV.shift
    name = ARGV.join('-')
    root = File.dirname(__FILE__)

    scss = <<-eos
// ==========================================================================
// Module: #{name}.scss
// ========================================================================== */

.#{name} {}
    eos
    File.open("#{root}/scss/modules/_#{name}.scss", 'w') {|f| f.write(scss)}
    File.open("#{root}/scss/_modules.scss", 'a') {|f| f.write("@import \"modules/#{name}\";\n") }

    puts "Module .\"#{name}\" created."
  end
end