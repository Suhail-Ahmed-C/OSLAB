// ══════════════════════════════════════════════════════
//  ALL 232 QUESTIONS — every command from the document
// ══════════════════════════════════════════════════════
const BANK = [
// A
{q:"What does <cmd>apropos</cmd> do?",opts:["Search Help manual pages (man -k)","Append output to a process","Apply OS patches remotely","Automate program operations"],ans:0,cat:"HELP"},
{q:"Which command is used to <cmd>search for and install software packages</cmd> on Debian?",opts:["rpm","yum","apt-get","pacman"],ans:2,cat:"PACKAGE MGMT"},
{q:"What is <cmd>aptitude</cmd> used for?",opts:["Automate SSH tunnels","Search for and install software packages (Debian)","Archive utility tool","Adjust CPU aptitude settings"],ans:1,cat:"PACKAGE MGMT"},
{q:"Which command is the <cmd>spell checker</cmd> in Linux?",opts:["spellcheck","aspell","ispell","checkspell"],ans:1,cat:"TEXT TOOLS"},
{q:"What does <cmd>awk</cmd> do?",opts:["Archive work kernel","Find and Replace text, database sort/validate/index","Auto-write kernel modules","Apply work configurations"],ans:1,cat:"TEXT PROCESSING"},
// B
{q:"What does <cmd>basename</cmd> do?",opts:["Display base system name","Strip directory and suffix from filenames","Show base memory name","Print base CPU info"],ans:1,cat:"FILE TOOLS"},
{q:"What is <cmd>bash</cmd>?",opts:["A binary archive shell handler","GNU Bourne-Again Shell","A batch application service host","Background automated scheduler"],ans:1,cat:"SHELL"},
{q:"What is <cmd>bc</cmd> used for?",opts:["Backup compiler","Arbitrary precision calculator language","Binary class control","Block cache manager"],ans:1,cat:"MATH"},
{q:"What does the <cmd>bg</cmd> command do?",opts:["Block graphics mode","Begin group jobs","Send a job to background","Boot graphics daemon"],ans:2,cat:"JOBS"},
{q:"What does <cmd>break</cmd> do in a shell script?",opts:["Break network connection","Exit from a loop","Breakpoint a process","Clear break buffer"],ans:1,cat:"SCRIPTING"},
{q:"What does <cmd>builtin</cmd> do?",opts:["Build kernel modules inline","Run a shell builtin command","Build init services","Bootstrap kernel modules"],ans:1,cat:"SHELL"},
{q:"What does <cmd>bzip2</cmd> do?",opts:["Backup zip level 2","Compress or decompress named files","Binary zip to zip2","Batch zip two directories"],ans:1,cat:"COMPRESSION"},
// C
{q:"What does <cmd>cal</cmd> display?",opts:["CPU calibration data","A calendar","Call log activity","Current allocation list"],ans:1,cat:"DATE & TIME"},
{q:"What does <cmd>case</cmd> do in shell scripting?",opts:["Change access settings","Clear all session environments","Conditionally perform a command","Create automated shell events"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>cat</cmd> do?",opts:["Concatenate and print (display) the content of files","Cancel active tasks","Capture and transfer files","Configure access tables"],ans:0,cat:"FILE VIEWING"},
{q:"What does <cmd>cd</cmd> stand for?",opts:["Copy Data","Change Directory","Create Dir","Configure Device"],ans:1,cat:"NAVIGATION"},
{q:"What is <cmd>cfdisk</cmd> used for?",opts:["Configure file display ink","Partition table manipulator for Linux","Create file disk images","Copy full disk interactively"],ans:1,cat:"DISK"},
{q:"What does <cmd>chgrp</cmd> do?",opts:["Change graphical permissions","Check group processes","Change group ownership","Configure group paths"],ans:2,cat:"PERMISSIONS"},
{q:"What does <cmd>chkconfig</cmd> manage?",opts:["Check kernel configuration","Change keyboard configuration","System services (runlevel)","Check configuration files"],ans:2,cat:"SERVICES"},
{q:"What does <cmd>chmod</cmd> do?",opts:["Change file owner","Change access permissions","Configure host mode","Check mount options"],ans:1,cat:"PERMISSIONS"},
{q:"What does <cmd>chown</cmd> do?",opts:["Change output width","Check ownership nodes","Change file owner and group","Configure host on network"],ans:2,cat:"PERMISSIONS"},
{q:"What does <cmd>chroot</cmd> do?",opts:["Change routing table","Run a command with a different root directory","Configure host root","Checkpoint running operations"],ans:1,cat:"SYSTEM"},
{q:"What does <cmd>cksum</cmd> do?",opts:["Check system memory","Print CRC checksum and byte counts","Configure kernel summary","Clear kernel symbol map"],ans:1,cat:"FILE TOOLS"},
{q:"What does <cmd>clear</cmd> do?",opts:["Close all running processes","Clear terminal screen","Clean log records","Clear read-only locks"],ans:1,cat:"TERMINAL"},
{q:"What does <cmd>cmp</cmd> do?",opts:["Compile program modules","Configure memory pool","Compare two files","Clear mount points"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>comm</cmd> do?",opts:["Configure communication modules","Compare two sorted files line by line","Control memory management","Create output modes"],ans:1,cat:"FILE TOOLS"},
{q:"What does <cmd>command</cmd> do?",opts:["Run a command – ignoring shell functions","Configure mandatory authentication","Create new module commands","Connect command modules"],ans:0,cat:"SHELL"},
{q:"What does <cmd>continue</cmd> do in a loop?",opts:["Continue to the next program","Resume the next iteration of a loop","Connect to the next node","Configure output to terminal"],ans:1,cat:"SCRIPTING"},
{q:"What does <cmd>cp</cmd> do?",opts:["Create process","Check permissions","Copy one or more files to another location","Configure paths"],ans:2,cat:"FILE OPERATIONS"},
{q:"What is <cmd>cron</cmd>?",opts:["A compression tool","Daemon to execute scheduled commands","A core network overlay","A crash recovery option"],ans:1,cat:"SCHEDULING"},
{q:"What does <cmd>crontab</cmd> do?",opts:["Create tab-delimited tables","Configure routing tabs","Schedule a command to run at a later time","Control core timestamps"],ans:2,cat:"SCHEDULING"},
{q:"What does <cmd>csplit</cmd> do?",opts:["Copy split files","Create system partitions","Split a file into context-determined pieces","Configure split intervals"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>cut</cmd> do?",opts:["Cut terminal session","Configure user tables","Divide a file into several parts","Clear user tasks"],ans:2,cat:"TEXT PROCESSING"},
// D
{q:"What does <cmd>date</cmd> do?",opts:["Delete all temporary files","Display or change the date and time","Daemon automatic timing engine","Data archive transfer engine"],ans:1,cat:"DATE & TIME"},
{q:"What is <cmd>dc</cmd>?",opts:["Directory context","Disk calculator","Desk Calculator","Data cache"],ans:2,cat:"MATH"},
{q:"What does <cmd>dd</cmd> do?",opts:["Delete directory","Display disk data","Convert and copy a file, write disk headers, boot records","Duplicate data destination"],ans:2,cat:"FILE OPERATIONS"},
{q:"What is <cmd>ddrescue</cmd> used for?",opts:["Delete and rescue orphan files","Disk defrag and rescue","Data recovery tool","Duplicate disk rescue"],ans:2,cat:"DISK"},
{q:"What does <cmd>declare</cmd> do?",opts:["Delete cached resources","Display core log entries","Declare variables and give them attributes","Define command-line entries"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>df</cmd> display?",opts:["Default files","Directory functions","Display free disk space","Define flags"],ans:2,cat:"DISK"},
{q:"What does <cmd>diff</cmd> do?",opts:["Define interface function","Display the differences between two files","Delete identical files","Diff internal flags"],ans:1,cat:"FILE TOOLS"},
{q:"What does <cmd>diff3</cmd> do?",opts:["Diff 3 partitions","Show differences among three files","Delete 3 duplicate files","Display 3-level directory diff"],ans:1,cat:"FILE TOOLS"},
{q:"What does <cmd>dig</cmd> do?",opts:["Disk information getter","Display interactive graphics","DNS lookup","Diagnose interface gateway"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>dir</cmd> do?",opts:["Display interactive root","Direct input router","Diagnose interface route","Briefly list directory contents"],ans:3,cat:"FILE SYSTEM"},
{q:"What is <cmd>dircolors</cmd> used for?",opts:["Directory core listing","Colour setup for 'ls'","Diagnose recursive colours","Default input/output colours"],ans:1,cat:"TERMINAL"},
{q:"What does <cmd>dirname</cmd> do?",opts:["Display inner name","Delete inner names","Convert a full pathname to just a path","Define internal name"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>dirs</cmd> do?",opts:["Display internal root structure","Diagnose input routes","Delete interim resources","Display list of remembered directories"],ans:3,cat:"SHELL"},
{q:"What does <cmd>dmesg</cmd> do?",opts:["Display metadata for segments","Print kernel & driver messages","Diagnose memory segments","Delete message queues"],ans:1,cat:"SYSTEM"},
{q:"What does <cmd>du</cmd> do?",opts:["Display users","Duplicate utilities","Delete unused","Estimate file space usage"],ans:3,cat:"DISK"},
// E
{q:"What does <cmd>echo</cmd> do?",opts:["Execute command history","Display message on screen","Enable core host","Export command history"],ans:1,cat:"OUTPUT"},
{q:"What does <cmd>egrep</cmd> do?",opts:["Evaluate global regular expressions","Search files for lines that match an extended expression","Export grep results","Enable global regex path"],ans:1,cat:"TEXT SEARCH"},
{q:"What does <cmd>eject</cmd> do?",opts:["Eject running process","Exit job environment","Eject removable media","Enable job execution"],ans:2,cat:"HARDWARE"},
{q:"What does <cmd>enable</cmd> do?",opts:["Enable extended networking abilities","Enable and disable builtin shell commands","Export networking abilities","Extend native abilities"],ans:1,cat:"SHELL"},
{q:"What does <cmd>env</cmd> display or manage?",opts:["Enable nested virtualization","Expand new volumes","Environment variables","Enable node validation"],ans:2,cat:"ENVIRONMENT"},
{q:"What is <cmd>ethtool</cmd> used for?",opts:["Edit text headers tool","Ethernet card settings","Enable terminal host options","Extend terminal handling operations"],ans:1,cat:"NETWORKING"},
{q:"What does <cmd>eval</cmd> do?",opts:["Evaluate several commands/arguments","Enable variable allocation","Exit virtual applications","Export value aliases"],ans:0,cat:"SCRIPTING"},
{q:"What does <cmd>exec</cmd> do?",opts:["Extract command","Execute a command","Export executable","Enable execution context"],ans:1,cat:"SHELL"},
{q:"What does <cmd>exit</cmd> do?",opts:["Export internal tables","Expire terminal logs","Execute exit handler","Exit the shell"],ans:3,cat:"SHELL"},
{q:"What does <cmd>expect</cmd> do?",opts:["Export packed text","Automate arbitrary applications accessed over a terminal","Enable extended packet handling","Expand execution paths"],ans:1,cat:"AUTOMATION"},
{q:"What does <cmd>expand</cmd> do?",opts:["Expand partitions","Extract package data","Convert tabs to spaces","Enable extended paths"],ans:2,cat:"TEXT PROCESSING"},
{q:"What does <cmd>export</cmd> do?",opts:["Extract port data","Set an environment variable","Enable port operations","Export port options"],ans:1,cat:"ENVIRONMENT"},
{q:"What does <cmd>expr</cmd> do?",opts:["Export resource","Evaluate expressions","Extract process records","Enable expression routing"],ans:1,cat:"MATH"},
// F
{q:"What does <cmd>false</cmd> do?",opts:["Flag all log segments","Force application log save","Do nothing, unsuccessfully (returns exit 1)","Flush all log streams"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>fdformat</cmd> do?",opts:["Format FTP download","Force disk format","Low-level format a floppy disk","File display format"],ans:2,cat:"DISK"},
{q:"What does <cmd>fdisk</cmd> do?",opts:["Format disk sectors","File disk inspector","Partition table manipulator for Linux","Filesystem disk initializer"],ans:2,cat:"DISK"},
{q:"What does <cmd>fg</cmd> do?",opts:["Format graphical output","Flush global cache","Send job to foreground","File grouping"],ans:2,cat:"JOBS"},
{q:"What does <cmd>fgrep</cmd> do?",opts:["Find global regular expressions","File grep results","Search files for lines that match a fixed string","Format grep output"],ans:2,cat:"TEXT SEARCH"},
{q:"What does <cmd>file</cmd> do?",opts:["Fill in log entries","Flush internal log entries","Find important log entries","Determine file type"],ans:3,cat:"FILE TOOLS"},
{q:"What does <cmd>find</cmd> do?",opts:["Format index node data","Search for files that meet a desired criteria","Filter internal data","Flush indexed data"],ans:1,cat:"FILE SEARCH"},
{q:"What does <cmd>fmt</cmd> do?",opts:["Format module task","Flush memory table","Reformat paragraph text","Format mount table"],ans:2,cat:"TEXT PROCESSING"},
{q:"What does <cmd>fold</cmd> do?",opts:["Follow open log data","Flush old log data","Format old log data","Wrap text to fit a specified width"],ans:3,cat:"TEXT PROCESSING"},
{q:"What does <cmd>for</cmd> do in shell?",opts:["Force output results","Expand words, and execute commands","Format output results","Flush output resources"],ans:1,cat:"SCRIPTING"},
{q:"What does <cmd>format</cmd> do?",opts:["Format application tasks","Format disks or tapes","Force output remove action","Flush object references"],ans:1,cat:"DISK"},
{q:"What does <cmd>free</cmd> display?",opts:["Show free running executables","Free resources entries","Display memory usage","Show free router entries"],ans:2,cat:"SYSTEM"},
{q:"What does <cmd>fsck</cmd> do?",opts:["File system check keys","Force system cache kill","File system consistency check and repair","Flush storage cache kernel"],ans:2,cat:"DISK"},
{q:"What does <cmd>ftp</cmd> stand for and do?",opts:["File Transfer Protocol","Fast terminal program","File transport proxy","Firewall translation portal"],ans:0,cat:"NETWORKING"},
{q:"What does <cmd>function</cmd> do?",opts:["File utility notation","Define Function Macros","Force utility networking","Flush utility notation"],ans:1,cat:"SCRIPTING"},
{q:"What does <cmd>fuser</cmd> do?",opts:["Force user sessions","Find user source","Identify/kill the process that is accessing a file","File user resource"],ans:2,cat:"PROCESSES"},
// G
{q:"What does <cmd>gawk</cmd> do?",opts:["General archival work kit","Global archive work kit","Find and Replace text within files","Group archival work kit"],ans:2,cat:"TEXT PROCESSING"},
{q:"What does <cmd>getopts</cmd> do?",opts:["Get OS top stats","Get optional task settings","Get open text settings","Parse positional parameters"],ans:3,cat:"SCRIPTING"},
{q:"What does <cmd>grep</cmd> do?",opts:["Get remote execute path","Group remote export path","Search files for lines that match a given pattern","General resource export path"],ans:2,cat:"TEXT SEARCH"},
{q:"What does <cmd>groupadd</cmd> do?",opts:["Group application add","Add a user security group","Group address data","General object addition"],ans:1,cat:"USER MANAGEMENT"},
{q:"What does <cmd>groupdel</cmd> do?",opts:["Group delegation","Delete a group","Group data log","General object deletion"],ans:1,cat:"USER MANAGEMENT"},
{q:"What does <cmd>groupmod</cmd> do?",opts:["Group mode object","Modify a group","Group module data","General object modification"],ans:1,cat:"USER MANAGEMENT"},
{q:"What does <cmd>groups</cmd> do?",opts:["Global route up status","Print group names a user is in","Get route options","Global user settings"],ans:1,cat:"USER MANAGEMENT"},
{q:"What does <cmd>gzip</cmd> do?",opts:["General zip input","Compress or decompress named files","Group zip import","Generate zip index"],ans:1,cat:"COMPRESSION"},
// H
{q:"What does <cmd>head</cmd> do?",opts:["Hide extended attributes daemon","Output the first part of files","Host execute and display","Handle error and debug"],ans:1,cat:"FILE VIEWING"},
{q:"What does <cmd>help</cmd> do?",opts:["Host error log path","Handle error log path","Display help for a built-in command","Host extended log path"],ans:2,cat:"HELP"},
{q:"What does <cmd>history</cmd> do?",opts:["Host input storage tracker","Command History","Handle input storage tracker","Hide internal storage"],ans:1,cat:"SHELL"},
{q:"What does <cmd>hostname</cmd> do?",opts:["Host node allocation","Print or set system name","Handle object notation","Host object name"],ans:1,cat:"SYSTEM"},
// I
{q:"What does <cmd>iconv</cmd> do?",opts:["Index content overview","Convert the character set of a file","Inspect content output","Internal code overview"],ans:1,cat:"TEXT TOOLS"},
{q:"What does <cmd>id</cmd> do?",opts:["Input data","Internal daemon","Print user and group id's","Identify disk"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>if</cmd> do in shell scripting?",opts:["Internal function","Conditionally perform a command","Initialize function","Input framework"],ans:1,cat:"SCRIPTING"},
{q:"What does <cmd>ifconfig</cmd> do?",opts:["Install firewall configuration","Internal file configuration","Configure a network interface","Index file configuration"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>ifdown</cmd> do?",opts:["Internal firewall down","Stop a network interface","Index file down","Interrupt flow down"],ans:1,cat:"NETWORKING"},
{q:"What does <cmd>ifup</cmd> do?",opts:["Internal firewall up","Index file up","Start a network interface up","Interrupt flow up"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>import</cmd> do?",opts:["Install imported modules","Initiate port manager","Capture an X server screen and save the image to file","Import process manager"],ans:2,cat:"GRAPHICS"},
{q:"What does <cmd>install</cmd> do?",opts:["Install OS updates","Copy files and set attributes","Install application keys","Initiate standard libraries"],ans:1,cat:"FILE OPERATIONS"},
// J
{q:"What does <cmd>jobs</cmd> do?",opts:["Join object batch sessions","Just output basic stats","List active jobs","Jumbo object batch scheduler"],ans:2,cat:"JOBS"},
{q:"What does <cmd>join</cmd> do?",opts:["Joint object index names","Just output indexed names","Join object index numbers","Join lines on a common field"],ans:3,cat:"TEXT TOOLS"},
// K
{q:"What does <cmd>kill</cmd> do?",opts:["Kill all locked lists","Keep isolated login logs","Stop a process from running","Kill individual looping lists"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>killall</cmd> do?",opts:["Kill all locked lists","Keep all important logs","Kill processes by name","Kernel install log list"],ans:2,cat:"PROCESSES"},
// L
{q:"What does <cmd>less</cmd> do?",opts:["List extended system snapshots","Load extended service sets","Display output one screen at a time (with backward scroll)","Log extended service settings"],ans:2,cat:"FILE VIEWING"},
{q:"What does <cmd>let</cmd> do?",opts:["Load environment templates","Perform arithmetic on shell variables","List execution tasks","Log environment types"],ans:1,cat:"MATH"},
{q:"What does <cmd>ln</cmd> do?",opts:["List network nodes","Load network namespaces","Log node names","Create a symbolic link to a file"],ans:3,cat:"FILE SYSTEM"},
{q:"What does <cmd>local</cmd> do?",opts:["Load operating configurations","List operating classes","Create variables (local scope in a function)","Lock original content"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>locate</cmd> do?",opts:["Log current activity","Load configuration tables","List output categories","Find files (using a database index)"],ans:3,cat:"FILE SEARCH"},
{q:"What does <cmd>logname</cmd> do?",opts:["Log network activity","List output names","Print current login name","Load group names"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>logout</cmd> do?",opts:["Log output to terminal","List output types","Lock output tunnel","Exit a login shell"],ans:3,cat:"SHELL"},
{q:"What does <cmd>look</cmd> do?",opts:["List object output keys","Load object options keys","Display lines beginning with a given string","Lock open output keys"],ans:2,cat:"TEXT TOOLS"},
{q:"What does <cmd>lpc</cmd> stand for?",opts:["Load path controller","Line printer control program","List print configuration","Log print channels"],ans:1,cat:"PRINTING"},
{q:"What does <cmd>lpr</cmd> do?",opts:["List print results","Load print resources","Off line print","Log print records"],ans:2,cat:"PRINTING"},
{q:"What does <cmd>lprint</cmd> do?",opts:["List print info","Load print index","Print a file","Log print info"],ans:2,cat:"PRINTING"},
{q:"What does <cmd>lprintd</cmd> do?",opts:["List print daemon","Abort a print job","Load print data","Log print daemon"],ans:1,cat:"PRINTING"},
{q:"What does <cmd>lprintq</cmd> do?",opts:["List the print queue","Load print queries","Log print queue","Launch print queue"],ans:0,cat:"PRINTING"},
{q:"What does <cmd>lprm</cmd> do?",opts:["List printer removes","Load print resource manager","Remove jobs from the print queue","Log printer removes"],ans:2,cat:"PRINTING"},
{q:"What does <cmd>ls</cmd> do?",opts:["Load scripts","List information about files","Log system events","Launch services"],ans:1,cat:"FILE SYSTEM"},
{q:"What does <cmd>lsof</cmd> do?",opts:["List system open files","Load server output files","List open files","Log server operations files"],ans:2,cat:"PROCESSES"},
// M
{q:"What does <cmd>make</cmd> do?",opts:["Make archive keys","Manage application kernel","Recompile a group of programs","Merge application keys"],ans:2,cat:"DEVELOPMENT"},
{q:"What does <cmd>man</cmd> do?",opts:["Manage application nodes","Help manual","Monitor active nodes","Mount application namespaces"],ans:1,cat:"HELP"},
{q:"What does <cmd>mkdir</cmd> do?",opts:["Move disk into root","Modify disk info router","Create new folders","Manage disk info records"],ans:2,cat:"FILE SYSTEM"},
{q:"What does <cmd>mkfifo</cmd> do?",opts:["Make file info","Make FIFOs (named pipes)","Modify file info","Merge file info"],ans:1,cat:"FILE SYSTEM"},
{q:"What does <cmd>mkisofs</cmd> do?",opts:["Make indexed system of files","Create an hybrid ISO9660/JOLIET/HFS filesystem","Modify ISO filesystem","Merge ISO filesystem"],ans:1,cat:"DISK"},
{q:"What does <cmd>mknod</cmd> do?",opts:["Make kernel node","Make block or character special files","Modify kernel node","Merge kernel nodes"],ans:1,cat:"FILE SYSTEM"},
{q:"What does <cmd>mmv</cmd> do?",opts:["Make multiple versions","Manage multiple volumes","Mass Move and rename files","Mirror multiple volumes"],ans:2,cat:"FILE OPERATIONS"},
{q:"What does <cmd>more</cmd> do?",opts:["Move object records","Modify object records","Display output one screen at a time","Mount object resources"],ans:2,cat:"FILE VIEWING"},
{q:"What does <cmd>mount</cmd> do?",opts:["Move object under network tree","Monitor object unification","Mount a file system","Manage object update"],ans:2,cat:"FILE SYSTEM"},
{q:"What does <cmd>mtools</cmd> do?",opts:["Manipulate text output log settings","Monitor tools log streams","Manipulate MS-DOS files","Manage tools log streams"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>mtr</cmd> do?",opts:["Monitor terminal resources","Network diagnostics (traceroute/ping)","Manage terminal resources","Mount terminal resources"],ans:1,cat:"NETWORKING"},
{q:"What does <cmd>mv</cmd> do?",opts:["Monitor volumes","Move or rename files or directories","Manage volumes","Merge volumes"],ans:1,cat:"FILE OPERATIONS"},
// N
{q:"What does <cmd>netstat</cmd> do?",opts:["Network statistics tool","Networking information","Net status tool","Network terminal stats"],ans:1,cat:"NETWORKING"},
{q:"What does <cmd>nice</cmd> do?",opts:["Network interface control","New interface configuration","Set the priority of a command or job","Node interface controller"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>nl</cmd> do?",opts:["Network link","Node list","Number lines and write files","Network log"],ans:2,cat:"TEXT TOOLS"},
{q:"What does <cmd>nohup</cmd> do?",opts:["No host update","Network output handler utility","Run a command immune to hangups","Node output hub"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>notify-send</cmd> do?",opts:["Network notify sender","Send desktop notifications","Node notify service","Notification network sender"],ans:1,cat:"SYSTEM"},
{q:"What does <cmd>nslookup</cmd> do?",opts:["Name server lookup","Query Internet name servers interactively","Network status lookup","Name service log utility"],ans:1,cat:"NETWORKING"},
// O
{q:"What does <cmd>open</cmd> do?",opts:["Output plain text","Operate node","Open a file in its default application","Output network"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>op</cmd> do?",opts:["Output program","Open program","Operator access","Object path"],ans:2,cat:"USER MANAGEMENT"},
// P
{q:"What does <cmd>passwd</cmd> do?",opts:["Print all system settings","Process application services","Modify a user password","Print account storage state"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>paste</cmd> do?",opts:["Print all system tasks","Process and sort tasks","Merge lines of files","Print account storage tables"],ans:2,cat:"TEXT TOOLS"},
{q:"What does <cmd>pathchk</cmd> do?",opts:["Path check key","Check file name portability","Print active check keys","Process active checks"],ans:1,cat:"FILE TOOLS"},
{q:"What does <cmd>ping</cmd> do?",opts:["Print information nodes graphically","Port inspection node gateway","Test a network connection","Process internal network gateway"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>pkill</cmd> do?",opts:["Print kill log","Process kill log","Stop processes from running","Port kill log"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>popd</cmd> do?",opts:["Print output path directories","Process output path directories","Restore the previous value of the current directory","Port output path directories"],ans:2,cat:"SHELL"},
{q:"What does <cmd>pr</cmd> do?",opts:["Print resource","Prepare files for printing","Process resource","Port resource"],ans:1,cat:"PRINTING"},
{q:"What does <cmd>printcap</cmd> do?",opts:["Print capacity","Print capabilities","Printer capability database","Print capture"],ans:2,cat:"PRINTING"},
{q:"What does <cmd>printenv</cmd> do?",opts:["Print environment variables","Print everywhere","Print engine variables","Print enterprise"],ans:0,cat:"ENVIRONMENT"},
{q:"What does <cmd>printf</cmd> do?",opts:["Print file info","Print function index","Format and print data","Print formatted index"],ans:2,cat:"OUTPUT"},
{q:"What does <cmd>ps</cmd> do?",opts:["Print settings","Port status","Process status","Print source"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>pushd</cmd> do?",opts:["Push data to daemon","Process uptime service handler daemon","Save and then change the current directory","Push user shell handler daemon"],ans:2,cat:"SHELL"},
{q:"What does <cmd>pwd</cmd> do?",opts:["Print write daemon","Print Working Directory","Process working data","Port write daemon"],ans:1,cat:"NAVIGATION"},
// Q
{q:"What does <cmd>quota</cmd> do?",opts:["Query unallocated operations","Queue unmatched output actions","Display disk usage and limits","Queue object actions"],ans:2,cat:"DISK"},
{q:"What does <cmd>quotacheck</cmd> do?",opts:["Quick update output action check","Scan a file system for disk usage","Query unallocated check","Queue object action check"],ans:1,cat:"DISK"},
{q:"What does <cmd>quotactl</cmd> do?",opts:["Query control level","Queue control level","Set disk quotas","Quick object control level"],ans:2,cat:"DISK"},
// R
{q:"What is <cmd>ram</cmd> used for in Linux?",opts:["Remote access manager","Run application module","ram disk device","Recursive allocation manager"],ans:2,cat:"SYSTEM"},
{q:"What does <cmd>rcp</cmd> do?",opts:["Recursive copy protocol","Copy files between two machines","Remote copy path","Run copy process"],ans:1,cat:"NETWORKING"},
{q:"What does <cmd>read</cmd> do?",opts:["Read all data","Read a line from standard input","Read application data","Remote execution and download"],ans:1,cat:"SCRIPTING"},
{q:"What does <cmd>readarray</cmd> do?",opts:["Read all arrays","Read application arrays","Read from stdin into an array variable","Remote execution array"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>readonly</cmd> do?",opts:["Read output data","Remote output data","Mark variables/functions as readonly","Run output data"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>reboot</cmd> do?",opts:["Reset boot options","Reboot the system","Rebuild object order","Remove old boot"],ans:1,cat:"SYSTEM"},
{q:"What does <cmd>remsync</cmd> do?",opts:["Remote system syncing","Run environment sync","Synchronize remote files via email","Recursive environment sync"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>rename</cmd> do?",opts:["Reset name environment","Rename files","Run name environment","Remove name entries"],ans:1,cat:"FILE OPERATIONS"},
{q:"What does <cmd>renice</cmd> do?",opts:["Reset nice environment","Reload nice entries","Alter priority of running processes","Reload nice entries"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>return</cmd> do?",opts:["Reset environment","Reload entries","Exit a shell function","Remove entries"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>rev</cmd> do?",opts:["Review environment variables","Reverse lines of a file","Reload environment variables","Remove variables"],ans:1,cat:"TEXT TOOLS"},
{q:"What does <cmd>rm</cmd> do?",opts:["Reload modules","Run modules","Remove files","Reset modules"],ans:2,cat:"FILE OPERATIONS"},
{q:"What does <cmd>rmdir</cmd> do?",opts:["Reload module directory","Run module directory","Remove folders","Reset module directory"],ans:2,cat:"FILE SYSTEM"},
{q:"What does <cmd>rsync</cmd> do?",opts:["Remote system sync","Run system sync","Remote file copy (Synchronize file trees)","Reset system sync"],ans:2,cat:"NETWORKING"},
// S
{q:"What does <cmd>screen</cmd> do?",opts:["Show current environment","Multiplex terminal, run remote shells via ssh","Scan current environment","Store current environment"],ans:1,cat:"TERMINAL"},
{q:"What does <cmd>scp</cmd> do?",opts:["System copy protocol","Secure copy (remote file copy)","Shell copy path","Server copy process"],ans:1,cat:"NETWORKING"},
{q:"What does <cmd>sdiff</cmd> do?",opts:["Show diff side-by-side","Merge two files interactively","System diff","Sequential diff"],ans:1,cat:"FILE TOOLS"},
{q:"What does <cmd>sed</cmd> do?",opts:["System editor daemon","Show editor data","Stream Editor","Shell editor daemon"],ans:2,cat:"TEXT PROCESSING"},
{q:"What does <cmd>select</cmd> do?",opts:["Select environment","Show environment","Accept keyboard input","Set environment"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>seq</cmd> do?",opts:["Sequence executor","Print numeric sequences","Shell execute query","Sequential execution"],ans:1,cat:"TEXT TOOLS"},
{q:"What does <cmd>set</cmd> do?",opts:["Show environment types","Manipulate shell variables and functions","System environment types","Store environment types"],ans:1,cat:"SHELL"},
{q:"What does <cmd>sftp</cmd> do?",opts:["Simple file transfer","Secure File Transfer Program","Shell file transfer","Standard file transfer"],ans:1,cat:"NETWORKING"},
{q:"What does <cmd>shift</cmd> do?",opts:["Show input flags","Shift positional parameters","System input flags","Store input flags"],ans:1,cat:"SCRIPTING"},
{q:"What does <cmd>shopt</cmd> do?",opts:["Show options","System host options","Shell Options","Store host options"],ans:2,cat:"SHELL"},
{q:"What does <cmd>shutdown</cmd> do?",opts:["Show host update network","Shutdown or restart linux","Set host update network","Stop host update network"],ans:1,cat:"SYSTEM"},
{q:"What does <cmd>sleep</cmd> do?",opts:["System loop exit","Show log entries","Delay for a specified time","Store log entries"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>slocate</cmd> do?",opts:["Show location","System locate","Find files (secure locate)","Store location"],ans:2,cat:"FILE SEARCH"},
{q:"What does <cmd>sort</cmd> do?",opts:["Show object resource types","System object resource","Sort text files","Store object resource types"],ans:2,cat:"TEXT PROCESSING"},
{q:"What does <cmd>source</cmd> do?",opts:["Show output URLs","System output URLs","Run commands from a file","Store output URLs"],ans:2,cat:"SHELL"},
{q:"What does <cmd>split</cmd> do?",opts:["Show path list info","System path list","Split a file into fixed-size pieces","Store path list"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>ssh</cmd> do?",opts:["System shell handler","Show shell handler","Secure Shell client (remote login program)","Store shell handler"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>strace</cmd> do?",opts:["System trace router","Storage trace router","Trace system calls and signals","Show trace router"],ans:2,cat:"DEVELOPMENT"},
{q:"What does <cmd>su</cmd> do?",opts:["System user","Show user","Substitute user identity","Store user"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>sudo</cmd> do?",opts:["System user daemon operation","Show user daemon operation","Execute a command as another user","Store user daemon operation"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>sum</cmd> do?",opts:["Show user memory","System user memory","Print a checksum for a file","Store user memory"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>suspend</cmd> do?",opts:["Show uptime","System uptime","Suspend execution of this shell","Store uptime"],ans:2,cat:"SHELL"},
{q:"What does <cmd>symlink</cmd> do?",opts:["Show symlink info","System link manager","Make a new name for a file (symbolic link)","Store link info"],ans:2,cat:"FILE SYSTEM"},
{q:"What does <cmd>sync</cmd> do?",opts:["Show system network","Synchronize data on disk with memory","System network","Store network config"],ans:1,cat:"SYSTEM"},
// T
{q:"What does <cmd>tail</cmd> do?",opts:["Track all input logs","Terminate all input logs","Output the last part of file","Transfer all input logs"],ans:2,cat:"FILE VIEWING"},
{q:"What does <cmd>tar</cmd> stand for?",opts:["Transfer archive remote","Tape Archiver","Terminal archive runner","Text and resource"],ans:1,cat:"COMPRESSION"},
{q:"What does <cmd>tee</cmd> do?",opts:["Track execution entry","Terminal environment entry","Redirect output to multiple files","Transfer execution entry"],ans:2,cat:"OUTPUT"},
{q:"What does <cmd>test</cmd> do?",opts:["Track environment states","Terminal environment states","Evaluate a conditional expression","Transfer environment states"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>time</cmd> do?",opts:["Track input messages","Terminal input messages","Measure Program running time","Transfer input messages"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>times</cmd> do?",opts:["Track input messages store","Terminal input messages store","User and system times","Transfer input messages store"],ans:2,cat:"SHELL"},
{q:"What does <cmd>top</cmd> do?",opts:["Track object processes","Terminal object processes","List processes running on the system","Transfer object processes"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>touch</cmd> do?",opts:["Track object update chain","Terminal object update chain","Change file timestamps","Transfer object update chain"],ans:2,cat:"FILE OPERATIONS"},
{q:"What does <cmd>tr</cmd> do?",opts:["Transfer records","Terminal records","Translate, squeeze, and/or delete characters","Track records"],ans:2,cat:"TEXT PROCESSING"},
{q:"What does <cmd>traceroute</cmd> do?",opts:["Transfer remote output utility","Terminal remote output utility","Trace Route to Host","Track remote output utility"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>trap</cmd> do?",opts:["Transfer remote applications","Terminal remote applications","Run a command when a signal is set (Bourne shell)","Track remote applications"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>true</cmd> do?",opts:["Transfer remote update entry","Terminal remote update entry","Do nothing, successfully (returns exit 0)","Track remote update entry"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>tsort</cmd> do?",opts:["Transfer sort","Terminal sort","Topological sort","Track sort"],ans:2,cat:"TEXT TOOLS"},
{q:"What does <cmd>tty</cmd> do?",opts:["Transfer terminal info","Terminal type info","Print filename of terminal on stdin","Track terminal info"],ans:2,cat:"TERMINAL"},
{q:"What does <cmd>type</cmd> do?",opts:["Transfer type info","Terminal type info","Describe a command","Track type info"],ans:2,cat:"SHELL"},
// U
{q:"What does <cmd>ulimit</cmd> do?",opts:["Update limit info","Universal limit info","Limit user resources","Upload limit info"],ans:2,cat:"SYSTEM"},
{q:"What does <cmd>umask</cmd> do?",opts:["Update mask","Universal mask","Users file creation mask","Upload mask"],ans:2,cat:"PERMISSIONS"},
{q:"What does <cmd>umount</cmd> do?",opts:["Update mount","Universal mount","Unmount a device","Upload mount"],ans:2,cat:"FILE SYSTEM"},
{q:"What does <cmd>unalias</cmd> do?",opts:["Update alias","Universal alias","Remove an alias","Upload alias"],ans:2,cat:"SHELL"},
{q:"What does <cmd>uname</cmd> do?",opts:["Update name","Universal name","Print system information","Upload name"],ans:2,cat:"SYSTEM"},
{q:"What does <cmd>unexpand</cmd> do?",opts:["Update expand","Universal expand","Convert spaces to tabs","Upload expand"],ans:2,cat:"TEXT PROCESSING"},
{q:"What does <cmd>uniq</cmd> do?",opts:["Update queue","Universal queue","Uniquify files (remove duplicate lines)","Upload queue"],ans:2,cat:"TEXT TOOLS"},
{q:"What does <cmd>units</cmd> do?",opts:["Update units","Universal units","Convert units from one scale to another","Upload units"],ans:2,cat:"MATH"},
{q:"What does <cmd>unset</cmd> do?",opts:["Update set","Universal set","Remove variable or function names","Upload set"],ans:2,cat:"SHELL"},
{q:"What does <cmd>unshar</cmd> do?",opts:["Update shar","Universal shar","Unpack shell archive scripts","Upload shar"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>until</cmd> do?",opts:["Update iteration","Universal iteration","Execute commands (until error)","Upload iteration"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>uptime</cmd> do?",opts:["Update time","Universal time","Show uptime (how long system has been running)","Upload time"],ans:2,cat:"SYSTEM"},
{q:"What does <cmd>useradd</cmd> do?",opts:["Update user address","Universal user address","Create new user account","Upload user address"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>usermod</cmd> do?",opts:["Update user model","Universal user model","Modify user account","Upload user model"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>users</cmd> do?",opts:["Update system","Universal system","List users currently logged in","Upload system"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>uudecode</cmd> do?",opts:["Update unique decode","Universal unique decode","Decode a file created by uuencode","Upload unique decode"],ans:2,cat:"FILE TOOLS"},
{q:"What does <cmd>uuencode</cmd> do?",opts:["Update unique encode","Universal unique encode","Encode a binary file","Upload unique encode"],ans:2,cat:"FILE TOOLS"},
// V
{q:"What does <cmd>v</cmd> do?",opts:["Variable input","Version info","Verbosely list directory contents (ls -l -b)","Virtual image"],ans:2,cat:"FILE SYSTEM"},
{q:"What does <cmd>vdir</cmd> do?",opts:["Variable directory","Version directory","Verbosely list directory contents (ls -l -b)","Virtual directory"],ans:2,cat:"FILE SYSTEM"},
{q:"What is <cmd>vi</cmd>?",opts:["Virtual image","Version info","Text Editor","Variable input"],ans:2,cat:"TEXT EDITOR"},
{q:"What does <cmd>vmstat</cmd> do?",opts:["Virtual machine status","Version module statistics","Report virtual memory statistics","Volume manager statistics"],ans:2,cat:"SYSTEM"},
// W
{q:"What does <cmd>wait</cmd> do?",opts:["Write application info","Watch application info","Wait for a process to complete","Wrap application info"],ans:2,cat:"PROCESSES"},
{q:"What does <cmd>watch</cmd> do?",opts:["Write application","Watch archive","Execute/display a program periodically","Wrap application"],ans:2,cat:"SYSTEM"},
{q:"What does <cmd>wc</cmd> do?",opts:["Write content","Watch content","Print byte, word, and line counts","Wrap content"],ans:2,cat:"TEXT TOOLS"},
{q:"What does <cmd>wget</cmd> do?",opts:["Write global entry","Watch global entry","Retrieve web pages or files via HTTP/FTP","Wrap global entry"],ans:2,cat:"NETWORKING"},
{q:"What does <cmd>whereis</cmd> do?",opts:["Write entry location","Watch entry location","Search the user's $path, man pages and source files for a program","Wrap entry location"],ans:2,cat:"FILE SEARCH"},
{q:"What does <cmd>while</cmd> do?",opts:["Write handling in loop environment","Watch handling in loop environment","Execute commands (while condition is true)","Wrap handling in loop environment"],ans:2,cat:"SCRIPTING"},
{q:"What does <cmd>who</cmd> do?",opts:["Write host output","Watch host output","Print all usernames currently logged in","Wrap host output"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>whoami</cmd> do?",opts:["Write host output all machine info","Watch host output all machine info","Print the current user id and name","Wrap host output all machine info"],ans:2,cat:"USER MANAGEMENT"},
{q:"What does <cmd>write</cmd> do?",opts:["Write resource info","Watch resource info","Send a message to another user","Wrap resource info"],ans:2,cat:"COMMUNICATION"},
// X
{q:"What does <cmd>xargs</cmd> do?",opts:["Extract arguments","Explore arguments","Execute utility, passing constructed argument lists","Export arguments"],ans:2,cat:"SHELL"},
{q:"What does <cmd>xdg-open</cmd> do?",opts:["Extract desktop graphics","Explore desktop graphics","Open a file or URL in the user's preferred application","Export desktop graphics"],ans:2,cat:"FILE TOOLS"},
// Y
{q:"What does <cmd>yes</cmd> do?",opts:["Yellow system entry","Your system entry","Print a string until interrupted","Yield system entry"],ans:2,cat:"TEXT TOOLS"},
];

// ══════════════════════════════════
//  STATE
// ══════════════════════════════════
let questions=[],idx=0,score=0,wrong=0,answered=false,timer=null,tLeft=20,history=[];
const L=['A','B','C','D'];

// ══════════════════════════════════
//  INIT
// ══════════════════════════════════
(function init(){
  const sf=document.getElementById('sf');
  for(let i=0;i<170;i++){
    const s=document.createElement('div');s.className='star';
    const sz=Math.random()*2.4+.4;
    s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${(Math.random()*4+2).toFixed(1)}s;animation-delay:${(Math.random()*5).toFixed(1)}s;opacity:.35`;
    sf.appendChild(s);
  }
  const cols=['#00f5ff','#bf00ff','#00ff88','#ff007f'];
  for(let i=0;i<18;i++){
    const p=document.createElement('div');p.className='part';
    const c=cols[i%4],sz=Math.random()*4+2;
    p.style.cssText=`width:${sz}px;height:${sz}px;background:${c};box-shadow:0 0 9px ${c};left:${Math.random()*100}%;bottom:${Math.random()*30}%;--dur:${(Math.random()*10+8).toFixed(1)}s;--dl:${(Math.random()*8).toFixed(1)}s;--tx:${(Math.random()*80-40).toFixed(0)}px;--ty:${-(Math.random()*280+140).toFixed(0)}px`;
    document.body.appendChild(p);
  }
})();

// ══════════════════════════════════
//  QUIZ FLOW
// ══════════════════════════════════
function startQuiz(){
  questions=shuffle([...BANK]);
  idx=0;score=0;wrong=0;history=[];
  document.getElementById('intro').style.display='none';
  document.getElementById('sbar').style.display='flex';
  document.getElementById('pcon').style.display='block';
  document.getElementById('qscreen').style.display='block';
  document.getElementById('stot').textContent=questions.length;
  document.getElementById('rt').textContent=questions.length;
  loadQ();
}

function loadQ(){
  answered=false;
  const q=questions[idx];
  const opts=shuffleOpts(q.opts,q.ans);

  // animate card
  const card=document.getElementById('qcard');
  card.style.animation='none';card.offsetHeight;card.style.animation='ca .4s cubic-bezier(.23,1,.32,1) both';

  document.getElementById('qnum').textContent=`Q ${String(idx+1).padStart(3,'0')}`;
  document.getElementById('qcat').textContent=q.cat;
  document.getElementById('qtxt').innerHTML=q.q.replace(/<cmd>(.*?)<\/cmd>/g,'<span class="cmd-hl">$1</span>');

  const grid=document.getElementById('ogrid');
  grid.innerHTML='';
  opts.forEach((o,i)=>{
    const b=document.createElement('button');
    b.className='obtn';b.setAttribute('data-i',i);
    b.innerHTML=`<span class="ol">${L[i]}</span><span>${o.text}</span>`;
    b.addEventListener('click',()=>pick(b,o.correct,i,opts));
    grid.appendChild(b);
  });

  document.getElementById('fb').className='fb';
  document.getElementById('bnxt').className='bnxt';

  const pct=(idx/questions.length)*100;
  document.getElementById('pfill').style.width=pct+'%';
  document.getElementById('ptxt').textContent=`${idx} / ${questions.length}`;

  updateStats();
  startTimer();
}

function shuffleOpts(opts,ans){
  return shuffle(opts.map((t,i)=>({text:t,correct:i===ans})));
}

function pick(btn,isOk,clickedI,opts){
  if(answered)return;
  answered=true;clearInterval(timer);
  document.querySelectorAll('.obtn').forEach(b=>b.disabled=true);
  // highlight correct
  document.querySelectorAll('.obtn').forEach(b=>{
    if(opts[parseInt(b.getAttribute('data-i'))].correct) b.classList.add('correct');
  });
  const fb=document.getElementById('fb');
  const correctText=opts.find(o=>o.correct).text;
  if(isOk){
    score++;btn.classList.add('correct');
    fb.className='fb ok show';fb.innerHTML='✅ <strong>Correct!</strong> Well done!';
    history.push({q:questions[idx],chosen:btn.querySelector('span:last-child').textContent,ok:true});
  } else {
    wrong++;btn.classList.add('wrong');
    fb.className='fb bad show';fb.innerHTML=`❌ <strong>Incorrect.</strong> Correct answer: <strong style="color:var(--g)">${correctText}</strong>`;
    history.push({q:questions[idx],chosen:btn.querySelector('span:last-child').textContent,ok:false,correct:correctText});
  }
  updateStats();
  document.getElementById('bnxt').className='bnxt show';
}

function startTimer(){
  tLeft=20;
  const disp=document.getElementById('td'),badge=document.getElementById('tbadge');
  disp.textContent=tLeft;badge.className='tbadge';
  timer=setInterval(()=>{
    tLeft--;disp.textContent=tLeft;
    if(tLeft<=8)badge.className='tbadge warn';
    if(tLeft<=0){
      clearInterval(timer);
      if(!answered){
        answered=true;
        document.querySelectorAll('.obtn').forEach(b=>b.disabled=true);
        wrong++;
        document.getElementById('fb').className='fb bad show';
        document.getElementById('fb').innerHTML='⏰ <strong>Time\'s up!</strong>';
        history.push({q:questions[idx],chosen:'—',ok:false,correct:'(Time Expired)'});
        updateStats();
        document.getElementById('bnxt').className='bnxt show';
      }
    }
  },1000);
}

function nextQ(){
  idx++;
  if(idx>=questions.length) showResults();
  else loadQ();
}

function updateStats(){
  document.getElementById('sq').textContent=idx+1;
  document.getElementById('sc').textContent=score;
  document.getElementById('sw').textContent=wrong;
  const total=idx+(answered?1:0);
  document.getElementById('sp').textContent=total>0?Math.round(score/total*100)+'%':'0%';
}

// ══════════════════════════════════
//  RESULTS
// ══════════════════════════════════
function showResults(){
  clearInterval(timer);
  document.getElementById('qscreen').style.display='none';
  document.getElementById('sbar').style.display='none';
  document.getElementById('pcon').style.display='none';

  const total=questions.length,pct=Math.round(score/total*100);
  document.getElementById('pfill').style.width='100%';

  let title,sub;
  if(pct>=90){title='🏆 ELITE HACKER';sub='Extraordinary! You have mastered all Linux commands!';}
  else if(pct>=75){title='⚡ POWER USER';sub='Excellent! You know your way around Linux very well.';}
  else if(pct>=60){title='💡 INTERMEDIATE';sub='Good job! Keep practicing to reach the next level.';}
  else if(pct>=40){title='📚 APPRENTICE';sub='Keep studying – review the commands and try again!';}
  else{title='🔰 BEGINNER';sub='Don\'t give up! Study the command list and retry.';}

  document.getElementById('rtitle').textContent=title;
  document.getElementById('rsub').textContent=sub;
  document.getElementById('rpct').textContent=pct+'%';
  document.getElementById('rc').textContent=score;
  document.getElementById('rw').textContent=wrong;
  document.getElementById('rt').textContent=total;

  const circ=2*Math.PI*70;
  const offset=circ-(pct/100)*circ;
  const ring=document.getElementById('srf');
  ring.style.strokeDasharray=circ;ring.style.strokeDashoffset=circ;
  setTimeout(()=>{ring.style.strokeDashoffset=offset;},100);

  document.getElementById('rscreen').className='rscreen show';
}

function restartQuiz(){
  document.getElementById('rscreen').className='rscreen';
  document.getElementById('rvscreen').className='rvscreen';
  document.getElementById('intro').style.display='block';
}

function showReview(){
  document.getElementById('rscreen').className='rscreen';
  const list=document.getElementById('rvlist');list.innerHTML='';
  history.forEach((h,i)=>{
    const item=document.createElement('div');item.className='rvitem';
    const qh=h.q.q.replace(/<cmd>(.*?)<\/cmd>/g,'<strong style="color:var(--c)">$1</strong>');
    item.innerHTML=`<div class="rvq">${i+1}. ${qh}</div>
      <div class="rva ${h.ok?'ok':'bad'}">${h.ok?'✅':'❌'} Your answer: <strong>${h.chosen}</strong></div>
      ${!h.ok?`<div class="rvca">✔ Correct: <strong style="color:var(--g)">${h.correct||h.q.opts[h.q.ans]}</strong></div>`:''}`;
    list.appendChild(item);
  });
  document.getElementById('rvscreen').className='rvscreen show';
}

function backToResult(){
  document.getElementById('rvscreen').className='rvscreen';
  document.getElementById('rscreen').className='rscreen show';
}

// ══════════════════════════════════
//  UTILS
// ══════════════════════════════════
function shuffle(a){
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
